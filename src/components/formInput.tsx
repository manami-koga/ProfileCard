import thumbnail from "../images/thumbnail_IMG_6074.jpg"
import { UserType } from "../types/User"
import styles from "../styles/UserCard.module.css"

export const FormInput = (Props: UserType) => {
    const { name, email, about } = Props;


    return (
        <>
            <div className={styles.card}>
                <img src={thumbnail} alt="ユーザ写真" />
                <div className={styles.userInfo}>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
                <p className={styles.about}>{about}</p>
            </div>
        </>


    )
}
