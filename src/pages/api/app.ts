import next from "next";
import { NextRequest, NextResponse } from "next/server";

async function GET(request: NextRequest) {
  console.log("Requisição GET recebida em /api/user/register");

  // A CORREÇÃO: Retorne um objeto Response com os dados e o status corretos
  return NextResponse.json({ message: "Acesso permitido!" }, { status: 200 });
}