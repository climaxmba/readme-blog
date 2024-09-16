"use client";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useInView, motion } from "framer-motion";
import styles from "./newsletterSection.module.scss";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const ref = useRef(null);
  const visible = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (success) setSuccess(null);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [success]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Wait for 1 sec
    await Promise.resolve(
      new Promise((res) => setTimeout(() => res(undefined), 1000))
    );

    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
    setSuccess("You've successfully subscribed for the newsletter!");
  };

  return (
    <section id="contact" className={styles.container}>
      <h1>Sign up for our weekly Newsletter</h1>

      <p>
        Stay ahead of the curve in the fast-paced world of software engineering.
        Subscribe to our weekly newsletter and receive curated content, expert
        insights, and exclusive resources delivered straight to your inbox.
        Never miss an opportunity to level up your coding skills.
      </p>

      {success ? <div className={styles.success}>{success}</div> : <></>}

      <motion.form
        ref={ref}
        initial={{ scale: 0.5 }}
        animate={visible ? { scale: 1 } : undefined}
        transition={{ type: "tween", duration: 0.35 }}
        action="/"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <TextField label="Email" type="email" required />

        {submitting ? (
          <Button type="submit" variant="contained" disabled>
            Signing Up...
          </Button>
        ) : (
          <Button title="Submit" variant="contained" type="submit">
            Sign Up
          </Button>
        )}
      </motion.form>
    </section>
  );
}
