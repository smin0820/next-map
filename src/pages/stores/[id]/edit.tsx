import { useRouter } from "next/router";

export default function StorEditePage() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h1>Store Edut: { id }</h1>
        </div>
    );
}
