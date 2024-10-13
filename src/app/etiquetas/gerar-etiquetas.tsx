"use client";

import { Button } from "@/components/ui/button";
import { store } from "@/lib/store";
import { TagIcon } from "lucide-react";
import { useSnapshot } from "valtio";

export default function GerarEtiquetas() {
  const snap = useSnapshot(store);
  return (
    <div className="ml-auto">
      <Button className="w-fit" onClick={() => console.log(snap.etiquetas)}>
        <p>Gerar Etiquetas</p>
        <TagIcon size={16} className="ml-2" />
      </Button>
    </div>
  );
}
