import { withRouter } from 'next/router'

export default withRouter(({ router }) => <span>A {router.query.id} </span>)
