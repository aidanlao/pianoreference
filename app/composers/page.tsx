import { getAllComposers } from "../firebase/queries";
import { Link } from "@nextui-org/link";
export default async function composerDirectory() {

    const composers = await getAllComposers();
    console.log(composers);
    const composerList = composers?.map((composer) => {
        const c = composer.data();
        return (
            <Link
                color="foreground"
                href={`composers/${c.id}`}
            >
                {c.name}
            </Link>
        )
            ;
    })


    return (
        <div>
            <h1 className="font-extrabold text-4xl mb-6">composers </h1>
            <ul className="flex flex-col">

            {composerList}
            </ul>
        </div>
    );
}