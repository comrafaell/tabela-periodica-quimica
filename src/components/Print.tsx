import { FileArrowDown } from "@phosphor-icons/react";

export function Print() {
    return (
        <div className="absolute fixed">
            <button><FileArrowDown size={80} color="#00ffff" weight="fill" />Baixar</button>
        </div>
    )
}