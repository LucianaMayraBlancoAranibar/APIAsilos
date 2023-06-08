import sql from "mssql";


const dbSettings = {
    user: 'admin',
    password: '123',
    server: 'AsilosAncianos.mssql.somee.com',
    database: 'AsilosAncianos',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
};

export async function getConnection() {

    try{
    const pool = await sql.connect(dbSettings);
    return pool;
    }catch(error){
        console.error(error);
    }
}

export { sql };