import { Accordion } from './accordion'
import { questions } from '../data/questions'
export const FAQSection = () => {
  return (
    <section className="px-5 md:px-10 pb-12">
    <h2 className="text-2xl text-center font-bold mb-8">Questions</h2>
    <div className="">
      <Accordion items={questions} />
    </div>
  </section>
  )
}
