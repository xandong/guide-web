import TextField from '@mui/material/TextField';
import { Button, IconButton, InputAdornment } from "@mui/material";
import { LockPersonRounded, MailRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from 'react-toastify' ;   

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from 'react';

const schema = z.object({
  email: z.string().email("Insira um email válido").nonempty("Campo obrigatório"),
  password: z.string().min(8, "Senha mínima de 8 caracteres")
}).required()

export function Form() {
  const notify = () => toast("Apenas logar com o Google disponível", {type: "info"})
  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema)})

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (formData) => {
    const data = schema.parse(formData)
    notify()
  }

  return <>
    <form
    className="flex flex-col gap-4 w-[360px]"
    onSubmit={handleSubmit(onSubmit)}>
      <TextField 
        id="email"
        type="email"
        placeholder="Digite seu email"
        variant="outlined"
        {...register("email", { required: true })}
        error={Boolean(errors.email)}
        helperText={
          errors.email ? errors.email.message?.toString() : undefined
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailRounded className="text-blue-500" fontSize="medium"/>
            </InputAdornment>
          ),
      }}
      />
      <TextField 
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="Digite sua senha"
        variant="outlined"
        {...register("password", { required: true })}
        error={Boolean(errors.password)}
        helperText={
          errors.password ? errors.password.message?.toString() : undefined
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockPersonRounded className="text-blue-500" fontSize="medium"/>
            </InputAdornment>
          ), endAdornment: (
            <InputAdornment position="end">
              <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              >
              {showPassword ? <Visibility fontSize='small'/> : <VisibilityOff fontSize='small'/>}
              </IconButton>
            </InputAdornment>
          )
      }}
      />
      <Button type="submit" variant="contained" sx={{mt: 2}}>Entrar</Button>
    </form>
  </>
}