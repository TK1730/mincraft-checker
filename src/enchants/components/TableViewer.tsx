import { useState, useEffect } from "react";
import EnchantTable from "./EnchantTable";
import { enchantList } from "../logic/DataManegement";

// Enchantにowned属性がある前提
export default function TableViewer() {
  // owned状態を配列で管理
  return (
    <EnchantTable enchants={enchantList} />
  )
}