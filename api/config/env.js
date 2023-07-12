export const inProduction = process.env.NODE_ENV === "production";
export const urlApi = inProduction?'':"http://localhost:3000";
