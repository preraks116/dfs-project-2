import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

const CaseStudy = () => {
  return (
    <PageLayout pagecentered>
      <Image src="/public/histology/3.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer3.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 50-year-old patient diagnosed with breast cancer. Explore the case
        study of the patient's journey through various treatment options,
        highlighting challenges and successes.
      </Text>

      <Text p>
        The breast cancer treatment journey involved a comprehensive approach,
        considering factors such as the specific type of breast cancer, the
        stage of the disease, and the patient's overall health. The case study
        outlines the following key aspects of the treatment process:
        <List>
          <li>
            <strong>Diagnosis and Staging:</strong> A detailed overview of the
            initial diagnosis, including the type and stage of breast cancer,
            forming the basis for treatment decisions.
          </li>
          <li>
            <strong>Treatment Options:</strong> Exploration of the various
            treatment options available, such as surgery, chemotherapy,
            radiation therapy, and targeted therapies. Each option is discussed
            in terms of its benefits, potential side effects, and relevance to
            the patient's case.
          </li>
          <li>
            <strong>Challenges and Successes:</strong> Reflection on the
            challenges faced during the treatment journey, alongside the
            successes achieved in managing and overcoming obstacles.
          </li>
        </List>
      </Text>

      <Text p>
        This case study provides valuable insights into the personalized nature
        of breast cancer treatment, highlighting the importance of tailored
        approaches and ongoing support for patients facing the complexities of
        their medical journey.
      </Text>
    </PageLayout>
  );
};

export default CaseStudy;
