export const GET=async(request)=>{
    const {searchParams}=new URL(request.url);
    const email = searchParams.get("email");
    const result = await getUserFromDb(email);
    return NextResponse.json(result);
}