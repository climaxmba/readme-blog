"use client";
import Button from "@mui/material/Button";
import {
  CrisisAlertOutlined,
  HourglassBottomOutlined,
} from "@mui/icons-material";

import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.ringsContainer}>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
      </div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
}

export function LoadingError({ message = "An Error Occured!" }) {
  return (
    <div className={styles.errorContainer}>
      <CrisisAlertOutlined />
      <p className={styles.errorMessage}>{message}</p>
      <Button onClick={() => location.reload()}>Refresh</Button>
    </div>
  );
}

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <HourglassBottomOutlined color="primary" />
    </div>
  );
}

export function SpinnerError() {
  return (
    <div>
      Error loading content!{" "}
      <Button onClick={() => location.reload()}>Reload</Button>
    </div>
  );
}
