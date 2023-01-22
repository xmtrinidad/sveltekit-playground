import sql from 'mssql';
import { DB_PASSWORD } from '$env/static/private'

export const startDB = async () => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect(`Server=localhost,1433;Database=devjobs;User Id=SA;Password=${DB_PASSWORD};Encrypt=true;Trusted_Connection=True;TrustServerCertificate=True;`)
  } catch (err) {
      console.log(err);
  }
};