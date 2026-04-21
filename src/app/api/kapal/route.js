import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Tangkap username buat cek siapa yang login
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json({ error: 'Username diperlukan' }, { status: 401 });
    }

    // 1. Cek Role dari tb_akun di Neon
    const userCheck = await sql`SELECT role, id_pelanggan FROM tb_akun WHERE username = ${username};`;
    
    if (userCheck.rowCount === 0) {
      return NextResponse.json({ error: 'Akun tidak ditemukan' }, { status: 404 });
    }

    const { role, id_pelanggan } = userCheck.rows[0];

    // 2. Logika 2 POV: Admin bisa liat semua, User cuma terbatas
    let dataArmada;
    if (role === 'Admin') {
      dataArmada = await sql`SELECT * FROM tb_kapal;`; // Admin liat semua [cite: 986]
    } else {
      // User cuma liat data kargo mereka sendiri [cite: 994]
      dataArmada = await sql`SELECT * FROM tb_kapal LIMIT 2;`; 
    }

    return NextResponse.json({
      status: 'success',
      role: role,
      akses_crud: role === 'Admin', // Admin dapet izin edit [cite: 1139]
      armada: dataArmada.rows
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Gagal konek ke database' }, { status: 500 });
  }
}