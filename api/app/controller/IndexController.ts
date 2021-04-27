import Express from 'express'

const router = Express.Router()

router.get('/', (req, res, next) => {
    const hello: string = 'Hello World'
    res.send(hello)
})

export default router
