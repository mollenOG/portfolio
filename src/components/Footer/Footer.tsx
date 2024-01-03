import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        Built with NextJS, TypeScript and ❤️.{' '}
        
        <br /> This project is made purely with intentions of fun and for not creating any nuisance.
      </div>
    </div>
  )
}
