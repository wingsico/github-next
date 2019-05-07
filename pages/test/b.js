import { withRouter } from 'next/router'
import Com from '../../components/Com';

const B = ({ router, name }) => {
  const { id } = router.query;
  return (
    <Com>
      <span>B {id}</span>
      <p>{name}</p>
    </Com>
  )
}

B.getInitialProps = async () => {
  console.log('-----------------------')
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'zwj',
      })
    }, 2000)
  })

  return await p;
}

export default withRouter(B);
