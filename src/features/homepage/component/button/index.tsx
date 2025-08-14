"use client";

import React from "react";
import styles from "./styles.module.scss";

type BCaiProps = {
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  border?: string;
  width?: string;
  height?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  rightIcon?: React.ReactNode;
};

const BcaiButton: React.FC<BCaiProps> = ({
  children,
  onClick,
  link,
  color,
  backgroundColor,
  hoverColor,
  hoverBackgroundColor,
  border,
  width,
  height,
  className = "",
  type = "button",
  rightIcon,
}) => {
  const buttonStyle = {
    color,
    backgroundColor,
    border,
    width,
    height,
    "--hover-color": hoverColor || color,
    "--hover-bg": hoverBackgroundColor || backgroundColor,
  } as React.CSSProperties;

  const content = (
    <span className={styles.content}>
      {children}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </span>
  );
  if (link) {
    return (
      <a
        href={link}
        className={`${styles.button} ${className}`}
        style={buttonStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};

export default BcaiButton;
