"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import validator from "validator";

export default function LoginPage() {
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    generalError: "",
  });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      generalError: "",
    };
    let valid = true;

    if (!form.email) {
      newErrors.email = "Email tidak boleh kosong";
      valid = false;
    } else if (!validator.isEmail(form.email)) {
      newErrors.email = "Email tidak valid";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "Password tidak boleh kosong";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    if (status === "authenticated") {
      push("/dashboard");
    }
    setLoading(false);
  }, [status, push]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple submissions while loading

    setLoading(true);
    const isValid = validate();

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
        callbackUrl: "/",
      });

      if (res?.status === 401) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          generalError: "Email atau password salah",
        }));
        setForm((prevForm) => ({
          ...prevForm,
          password: "", // Clear password field on error
        }));
      } else if (res?.ok) {
        push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        generalError: "Terjadi kesalahan, silakan coba lagi.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return status === "unauthenticated" ? (
    <div className="card lg:w-[466px] shadow-xl h-fit">
      <div className="card-body">
        <div className="flex flex-col gap-1 items-center">
          <h2 className="font-bold text-2xl">Welcome Back!</h2>
          <h4 className="">We’re so excited to see you again!</h4>
        </div>
        <form
          onSubmit={handleLogin}
          className="mt-4 flex flex-col gap-4"
          method="POST"
        >
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
            />
            {errors.email && <p className="text-error">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={`input input-bordered w-full ${
                errors.password ? "input-error" : ""
              }`}
            />
            {errors.password && <p className="text-error">{errors.password}</p>}
          </div>
          {
            errors.generalError && (
              <p className="text-error">{errors.generalError}</p>
            )
          }

          <div className="flex justify-between">
            <a
              href="/forgot-password"
              className="text-gray-800 dark:text-white"
            >
              Lupa Password?
            </a>
          </div>

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="flex justify-center gap-1 mt-[20px]">
          <span className="text-gray-800 dark:text-white">
            Butuh buat akun?
          </span>
          <Link href="/register">
            <p className="text-[var(--primary-color)] font-semibold">
              Daftar Disini
            </p>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}

function validateCredentials(email: string, password: string) {
  if (!email) {
    return {
      status: true,
      message: "Email tidak boleh kosong",
    };
  }

  if (!password) {
    return {
      status: true,
      message: "Password tidak boleh kosong",
    };
  }

  return {
    status: false,
    message: "",
  };
}
