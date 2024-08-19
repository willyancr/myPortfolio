import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK as string;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = schema.parse(body);
    const messageData = {
      embeds: [
        {
          title: "Contato Recebido",
          description: "Um novo contato foi enviado através do seu Portfolio!",
          color: 16753920, // Laranja
          fields: [
            {
              name: "Nome:",
              value: name,
              inline: true,
            },
            {
              name: "Email:",
              value: email,
              inline: true,
            },
            {
              name: "Mensagem:",
              value: message,
              inline: false,
            },
          ],
          
        },
      ],
    };
    await axios.post(DISCORD_WEBHOOK, messageData);
    return NextResponse.json({
      status: "success",
      message: "Contato enviado com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
