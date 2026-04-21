import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    // Validasi input
    if (!username || username.trim() === '') {
      return NextResponse.json(
        { error: 'Username diperlukan' },
        { status: 400 } // fix: 400 bukan 401
      );
    }

    // 1. Cek role dan id_pelanggan dari tb_akun
    const userCheck = await sql`
      SELECT role, id_pelanggan 
      FROM tb_akun 
      WHERE username = ${username}
      LIMIT 1;
    `;

    if (userCheck.rowCount === 0) {
      return NextResponse.json(
        { error: 'Akun tidak ditemukan' },
        { status: 404 }
      );
    }

    const { role, id_pelanggan } = userCheck.rows[0];

    // 2. Logika akses berdasarkan role
    let dataArmada;

    if (role === 'Admin') {
      // Admin: lihat semua kapal beserta info pelanggan terkait
      dataArmada = await sql`
        SELECT 
          k.*,
          a.username AS nama_pelanggan
        FROM tb_kapal k
        LEFT JOIN tb_akun a ON a.id_pelanggan = k.id_pelanggan
        ORDER BY k.id ASC;
      `;
    } else if (role === 'User') {
      // User: hanya lihat kapal milik mereka sendiri
      // fix: filter by id_pelanggan, bukan LIMIT 2
      if (!id_pelanggan) {
        return NextResponse.json(
          { error: 'Akun user tidak memiliki id_pelanggan yang valid' },
          { status: 403 }
        );
      }

      dataArmada = await sql`
        SELECT *
        FROM tb_kapal
        WHERE id_pelanggan = ${id_pelanggan}
        ORDER BY id ASC;
      `;
    } else {
      // Role tidak dikenal — jangan kasih data apapun
      return NextResponse.json(
        { error: `Role '${role}' tidak dikenali sistem` },
        { status: 403 }
      );
    }

    return NextResponse.json({
      status: 'success',
      role,
      akses_crud: role === 'Admin',
      armada: dataArmada.rows,
      total: dataArmada.rowCount
    }, { status: 200 });

  } catch (error) {
    // Log error asli di server — jangan dibuang
    console.error('[GET /api/kapal]', error);

    return NextResponse.json(
      { error: 'Gagal konek ke database', detail: error.message },
      { status: 500 }
    );
  }
}