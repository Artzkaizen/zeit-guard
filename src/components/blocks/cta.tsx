import { Button } from "../ui/button"

const CTA = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Did you Know 😔 ?
    </h2>
    <p className="text-gray-400 mb-8 mx-auto max-w-2xl">Compared to non-procrastinators, procrastinators are more likely to remain single than to get married, less likely to stay married, and more likely to get separated rather than divorced</p>
    <Button className="cursor-pointer">Get ZeitGuard Now</Button>
  </section>

  )
}

export default CTA