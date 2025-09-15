const links: Record<"tg" | "git" | "inst" | "behance", string> = {
    tg: "https://t.me/scgod",
    git: "https://github.com/toemoe",
    inst: "https://www.instagram.com/t0eoo/",
    behance: "https://www.behance.net/toemoe"
}

export const handleClickButton = (type: "inst" | "tg" | "git"  | "behance") => {
    window.location.href = links[type]
}