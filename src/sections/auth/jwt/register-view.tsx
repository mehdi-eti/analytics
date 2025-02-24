'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
import IconButton from '@mui/material/IconButton';
import { useBoolean } from 'src/hooks/use-boolean';
import InputAdornment from '@mui/material/InputAdornment';
import { RadioGroup, RadioGroupItem, Label } from 'src/components/ui';
// hooks
import FormProvider, { RHFTextField } from 'src/components/hook-form';
// auth
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

type FormValuesProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  sex: string;
};

export default function RegisterView() {
  const router = useRouter();
  const { register } = useAuthContext();
  const [errorMsg, setErrorMsg] = useState('');
  const [sex, setSex] = useState('male');
  const password = useBoolean();
  const confirm_password = useBoolean();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('نام الزامی است'),
    lastName: Yup.string().required('نام خانوادگی الزامی است'),
    phone: Yup.string().required('شماره موبایل الزامی است'),
    email: Yup.string().required('ایمیل الزامی است').email('ایمیل باید یک آدرس ایمیل معتبر باشد'),
    password: Yup.string()
      .required('رمز عبور ارائه نشده است.')
      .min(8, 'رمز عبور خیلی کوتاه است - حداقل باید 8 کاراکتر باشد.')
      .matches(/[a-zA-Z]/, 'رمز عبور فقط می تواند حاوی حروف لاتین باشد.'),
    confirm_password: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      'گذرواژه ها باید مطابقت داشته باشند'
    ),
  });

  const defaultValues = {
    firstName: 'محمد مهدی',
    lastName: 'اعتضادی',
    email: 'etezadi_mehdi@yahoo.com',
    phone: '09359971938',
    password: 'Mehdi123456**',
    sex: 'male',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(
    async (data: FormValuesProps) => {
      try {
        await register?.(
          data.email,
          data.password,
          data.firstName,
          data.lastName,
          data.phone,
          data.sex
        );
        router.push(`/auth/jwt/confirm-phone?phone=${data.phone}`);
      } catch (error) {
        console.error(error);
        reset();
        setErrorMsg(typeof error === 'string' ? error : error.message);
      }
    },
    [register, reset, router]
  );

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">ثبت نام</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> قبلا ثبت نام کرده اید؟ </Typography>

        <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
          ورود
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{ color: 'text.secondary', mt: 2.5, typography: 'caption', textAlign: 'center' }}
    >
      {'ورود شما به معنای پذیرش '}
      <Link underline="always" color="text.primary" className="font-bold">
        شرایط سایت ما
      </Link>
      {' و '}
      <Link underline="always" color="text.primary" className="font-bold">
        قوانین حریم‌خصوصی
      </Link>
      {' است.'}
    </Typography>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        {!!errorMsg && <Alert className="text-xs" severity="error">{errorMsg}</Alert>}

        <RHFTextField size="medium" name="firstName" label="نام" />
        <RHFTextField size="medium" name="lastName" label="نام خانوادگی" />
        <RHFTextField size="medium" name="email" label="ایمیل" />
        <RHFTextField size="medium" name="phone" label="شماره موبایل" />
        <RHFTextField
          name="password"
          label="رمز عبور"
          type={password.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirm_password"
          label="تکرار رمز عبور"
          defaultValue="Mehdi123456**"
          type={confirm_password.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={confirm_password.onToggle} edge="end">
                  <Iconify
                    icon={confirm_password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div className="flex jusity-center items-center gap-5">
          <span>جنسیت</span>
          <RadioGroup value={sex} onValueChange={(e) => setSex(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">مرد</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">زن</Label>
            </div>
          </RadioGroup>
        </div>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          loading={isSubmitting}
        >
          ثبت نام
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  return (
    <div className="border shadow-lg bg-white py-8 px-12 rounded-lg">
      {renderHead}

      {renderForm}

      {renderTerms}
    </div>
  );
}
