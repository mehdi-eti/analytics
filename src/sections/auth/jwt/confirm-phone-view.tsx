'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Loader } from '@mantine/core';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ActionIcon } from '@mantine/core';
import { FaArrowRight } from 'react-icons/fa6';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
// hooks
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { API_ENDPOINTS, sender } from 'src/utils/axios';

// ----------------------------------------------------------------------
type FormValuesProps = {
  pin: string;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default function JwtRegisterView() {
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10); // Initial time in seconds
  const [loading, setLoading] = useState(false); // Initial time in seconds
  const phoneParams = useSearchParams();

  const phone = phoneParams.get('phone');

  const RegisterSchema = Yup.object().shape({
    pin: Yup.string().required('کد الزامی است'),
  });

  const defaultValues = {
    pin: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (formData: FormValuesProps) => {
    try {
      await sender(API_ENDPOINTS.auth.verifyCode, JSON.stringify({ phone, pin: formData.pin }));
      router.push(`/auth/jwt/login/`);
    } catch (error) {
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  }, []);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timerId); // Cleanup on unmount
  }, [timeLeft]);

  async function sendCode() {
    setLoading(true);
    try {
      await sender(API_ENDPOINTS.auth.register, JSON.stringify({ phone }));
      // set state to defualt
      setErrorMsg('');
      setTimeLeft(180);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  }

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <div className="flex items-center gap-3 px-4">
        <ActionIcon
          color="gray"
          aria-label="Back"
          variant="transparent"
          onClick={() => router.back()}
        >
          <FaArrowRight style={{ width: '70%', height: '70%' }} />
        </ActionIcon>
        <Typography variant="h4">کد تایید را وارد کنید</Typography>
      </div>

      <Stack direction="row" spacing={0.5} className="px-12">
        <span className="text-xs">
          حساب کاربری با شماره موبایل {phone} وجود ندارد. برای ساخت حساب جدید، کد تایید برای این
          شماره ارسال گردید.
        </span>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} className="px-12">
        {!!errorMsg && <Alert className="text-xs" severity="error">{errorMsg}</Alert>}

        <RHFTextField name="pin" label="کد" type="number" />
        <div className="flex items-center justify-center gap-2">
          <Typography variant="body2" textAlign="center">
            {formatTime(timeLeft)} مانده تا دریافت مجدد کد
          </Typography>
          {timeLeft === 0 ? (
            loading ? (
              <Loader color="gray" size="sm" />
            ) : (
              <span className="text-blue-500 text-sm cursor-pointer" onClick={sendCode}>
                ارسال مجدد کد
              </span>
            )
          ) : null}
        </div>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          loading={isSubmitting}
        >
          ادامه
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  return (
    <div className="border shadow-lg bg-white py-8 rounded-lg">
      {renderHead}

      {renderForm}
    </div>
  );
}
