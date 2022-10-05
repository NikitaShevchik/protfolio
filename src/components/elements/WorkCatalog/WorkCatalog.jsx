import WorkCard from '../WorkCard/WorkCard';
import { nanoid } from 'nanoid'
import styles from './WorkCatalog.module.scss';

function id() {
    return nanoid()
}

const workData = [
    { name: 'Sneakers Shop', stack: 'React/HTML/CSS/JS', link: 'https://shevchiksneak.vercel.app/', id: id() },
    { name: 'Work number 2', stack: 'HTML/SCSS/JS', link: 'https://shevchiksneak.vercel.app/', id: id() },
    { name: 'bbeebebe', stack: 'CSS/JS', link: 'https://shevchiksneak.vercel.app/', id: id() },
]

const WorkCatalog = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__items}>
                {workData.map(work => {
                    return <WorkCard key={work.id} name={work.name} stack={work.stack} link={work.link} />
                })}
            </div>
        </div>
    )
}

export default WorkCatalog;