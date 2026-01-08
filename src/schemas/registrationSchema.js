import z from "zod"

const signUpSchema = z.object({
    firstName: z.string().nonempty("Fornavn skal udfyldes"),
    lastName: z.string().nonempty("Efternavn skal udfyldes"),
    username: z.string().min(2, "brugernavn skal være lægnere end et bogstav")
        .regex(/^\w+$/, "Dit brugernavn må ikke indholde mellemrum og specialtegn (underscore er tilladt)"),
    email: z.email("Du skal skrive en gyldig email"),
    password: z.string("Du skal skrive en adgangskode").min(8, "Din adgangskode skal være på mindst 8 tegn")
        .regex(/[a-zæøå]/, "Din adgangskode skal indeholde mindst et lille bogstav")
        .regex(/[A-ZÆØÅ]/, "Din adgangskode skal indeholde mindst et stort bogstav")
        .regex(/[\d]/, "Din adgangskode skal indeholde mindst et tal")
        .regex(/[\W]/, "Din adgangskode skal indeholde mindst et specialtegn"),
    confirmPassword: z.string(),
    birthday: z.coerce.date()
        .max(new Date(`${new Date().getFullYear() - 17}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`)),
    phone: z.coerce.string("Dit telefonnummer må kun indholde tal")
        .refine(n => n === "" || n.length === 8, "Dit telefonnummer må kun have 8 cifre"),
    description: z.string().nonempty("Beskrivelse skal udfyldes").max(200, "beskrivelse må max være 200 bogstaver")
}).refine(
    schema => schema.password === schema.confirmPassword,
    {path: ["confirmPassword"], error: "Adgangskoden matcher ikke"}
)

export default signUpSchema