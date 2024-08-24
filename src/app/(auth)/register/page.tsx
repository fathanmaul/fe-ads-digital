"use client";
import Button from "@/app/components/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import validator from "validator";
import { FaCheck } from "react-icons/fa6";

export default function RegisterPage() {
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (status === "authenticated") {
    push("/dashboard");
  }
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    country_code: "",
    phone: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    username: "",
    country_code: "+62",
    phone: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    const newErrors = {
      email: "",
      username: "",
      country_code: "",
      phone: "",
      password: "",
    };
    let valid = true;

    if (form.email === "") {
      newErrors.email = "Email tidak boleh kosong";
      valid = false;
    }

    if (!validator.isEmail(form.email)) {
      newErrors.email = "Email tidak valid";
      valid = false;
    }

    if (!form.username) {
      newErrors.username = "Username tidak boleh kosong";
      valid = false;
    }
    if (!form.country_code) {
      newErrors.country_code = "Kode Negara tidak boleh kosong";
      valid = false;
    }
    if (!form.phone) {
      newErrors.phone = "Nomor Telepon tidak boleh kosong";
      valid = false;
    }
    if (!form.password) {
      newErrors.password = "Password tidak boleh kosong";
      valid = false;
    }

    setErrors({ ...errors, ...newErrors });
    return valid;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = validate();
    setIsLoading(true);

    if (!isValid) {
      setIsLoading(false);
      return;
    }
    const res = await fetch("api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: form.email,
        username: form.username,
        country_code: form.country_code,
        phone: form.phone,
        password: form.password,
      }),
    });

    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        push("/login");
      }, 2000);
    } else {
      const data = await res.json();
      setErrors(data.body.message);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="card w-[466px] bg-white shadow-xl h-fit">
        <div className="card-body">
          <div className="flex flex-col gap-1 items-center">
            <h2 className={`font-bold text-2xl`}>Welcome to Fowardin</h2>
            <h4 className="text-center">
              Revolutionize your communication journey with Fowardin today
            </h4>
          </div>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
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
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.username ? "input-error" : ""
                }`}
              />
              {errors.username && (
                <p className="text-error">{errors.username}</p>
              )}
            </div>
            <div>
              <div className="flex flex-row gap-2">
                <select
                  className="select select-bordered w-full max-w-[100px]"
                  name="country_code"
                  onChange={handleChange}
                  defaultValue="+62"
                >
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                </select>

                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Whatsapp Phone Number"
                  className={`input input-bordered w-full ${
                    errors.phone ? "input-error" : ""
                  }`}
                />
              </div>
              {errors.phone && <p className="text-error">{errors.phone}</p>}
              {errors.country_code && (
                <p className="text-error">{errors.country_code}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                className={`input input-bordered w-full ${
                  errors.password ? "input-error" : ""
                }`}
              />
              {errors.password && (
                <p className="text-error">{errors.password}</p>
              )}
            </div>
            {success && (
              <div className="flex gap-2 items-center">
                <FaCheck className="text-success inline" />
                <p className="text-success inline">Register Berhasil</p>
              </div>
            )}

            <Button
              className="btn-primary"
              type="submit"
              rest={isLoading ? "disabled" : ""}
            >
              {isLoading ? "Loading..." : "Register"}
            </Button>
          </form>
          <div className="flex justify-center gap-1 mt-[20px]">
            <span className="dark:text-white">Sudah punya akun?</span>
            <Link href="/login">
              <p className="text-[var(--primary-color)] font-semibold">Masuk di sini</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
