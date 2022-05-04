import Link from "next/link"
import { useRouter } from "next/router"

export default function LinkTo({ destiny, name, close }) {

    const router = useRouter()

    const checkNavigation = () => {
        if (router.pathname == destiny) {
            close()
        } else {
            setTimeout(() => {
                close()
            }, 350);
        }
    }

    return (
        <>
        <Link href={destiny}>
            <a onClick={checkNavigation}>{name}
                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2769 12.0636L0.286327 22.461L0.777156 0.815954L19.2769 12.0636Z" fill="white"/>
                </svg>
            </a>
        </Link>

        <style jsx>{`
            a {
                font-weight:bold;
                font-size:1.8rem;
                cursor:crosshair;
                display:flex;
                align-items:center;
            }

            a svg {
                opacity:0;
                margin-inline: 1rem 0;
            }

            a:hover svg {
                opacity:1;
            }
        `}</style>
        </>
    )
}