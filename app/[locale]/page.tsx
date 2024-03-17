"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Speedle from "./components/Speedle/Speedle";


export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <section >
       
            <Header title={t("title")} subtitle={t("subtitle")} CTA={t("signIn")} />
            <Speedle title={t("speedle")} subtitle={t("speedleDesc")} CTA={t("speedleCTA")} />
           
      </section>
    </>
  );
}