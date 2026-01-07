import z from "zod"

const signUpSchema = z.object({
    firstName: z.string().nonempty("Fornavn skal udfyldes"),
    lastName: z.string().nonempty("Efternavn skal udfyldes"),
    email: z.email("Du skal skrive en gyldig email"),
    password: z.string().min(8, "Din adgangskode skal være på mindst 8 tegn")
        .regex(/[a-zæøå]/, "Din adgangskode skal indeholde mindst et lille bogstav")
        .regex(/[A-ZÆØÅ]/, "Din adgangskode skal indeholde mindst et stort bogstav")
        .regex(/[\d]/, "Din adgangskode skal indeholde mindst et tal")
        .regex(/[\W]/, "Din adgangskode skal indeholde mindst et specialtegn"),
    confirmPassword: z.string().nonempty("Du skal gnetage din adgangskode"),
    birthday: z.date(),
    phone: z.coerce.number("Dit telefonnummer må kun indholde tal")
        .min(10000000, "Dit telefonnummer skal være mindst 8 cifre")
}).refine(
    schema => schema.password === schema.confirmPassword,
    {path: ["confirmPassword"], error: "Adgangskoden matcher ikke"}
)

export default signUpSchema