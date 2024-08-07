import { NextRequest, NextResponse } from 'next/server';
import Users from '@/app/models/Users';
import dbConnect from '../../lib/dbConnect';
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';

export async function POST (req: NextRequest, res: NextResponse) {
    const data = await req.json();
    const { firstName, lastName, email, country, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10)

    await dbConnect();

    try {
        const user = new Users({
            firstName,
            lastName,
            email,
            country,
            password: hashedPassword,
        });
        console.log(user);
        await user.save();
        redirect("/role");
        // return NextResponse.json({ success: true, data: user });
      } catch (error) {
        return NextResponse.json({ success: false });
      }

}