import image1 from "../../public/imag1 (1).jpg";
const Banner = () => {
  return (
    <div>
      {/* 01 */}
      <section className="lg:flex lg:justify-evenly">
        <div className="lg:w-6/12">
          <img src={image1} alt="" />
        </div>

        <div className="lg:w-5/12">
          <p className="text-gray-800 font-serif font-bold lg:text-4xl text-2xl py-4">
            Paragraph
          </p>
          <p className="text-gray-800 font-serif lg:text-2xl ">
            A paragraph is a distinct section of writing that focuses on a
            single idea or theme. Typically composed of several sentences, a
            paragraph begins with a topic sentence that introduces the main
            idea, followed by supporting sentences that develop and elaborate on
            this idea. These sentences provide details, evidence, or examples to
            reinforce the topic. A well-crafted paragraph often concludes with a
            concluding sentence that summarizes the main point or provides a
            transition to the next paragraph. Effective paragraphs are essential
            for clear and coherent writing, as they help organize thoughts and
            guide the reader through the text in a logical manner.
          </p>
        </div>
      </section>

      {/* 02 */}

      <section className="lg:flex lg:justify-evenly lg:mt-10">
        <div className="lg:w-6/12">
          <p className="text-gray-800 font-serif font-bold lg:text-4xl text-2xl py-4">Story</p>
          <p className="text-gray-800 font-serif lg:text-2xl ">
            Stories are fundamental to human communication, allowing us to share
            experiences, imagine different possibilities, and understand complex
            emotions and situations. They can be delivered through various
            mediums including oral tradition, written text, film, theater, and
            digital platforms. Regardless of the medium, a compelling story
            engages the audience's imagination and emotions, making it a
            powerful tool for connection and expression.
          </p>
        </div>

        <div className="lg:w-5/12">
          <p className="text-gray-800 font-serif font-bold lg:text-4xl text-2xl py-4">Letter</p>
          <p className="text-gray-800 font-serif lg:text-2xl ">
            A letter is a written form of communication traditionally sent from
            one person to another, conveying messages, information, or
            sentiments. Letters can be formal or informal, depending on the
            relationship between the sender and the recipient and the purpose of
            the communication.Even in the digital age, letters remain
            significant for their personal touch and formality. They can convey
            sincerity and thoughtfulness in personal relationships, and they
            maintain professionalism and clarity in business and official
            contexts. Letters also serve as historical documents, providing
            insights into the past and preserving personal and collective
            histories.
          </p>
        </div>
      </section>


      {/* 03 */}
    </div>
  );
};

export default Banner;
