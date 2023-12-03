import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

/**
 * @description renders a case study page
 * @returns a case study page
 */
const CaseStudy = () => {
  return (
    <PageLayout pagecentered>
      <Image src="/public/histology/2.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer2.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 40-year-old patient diagnosed with melanoma. Explore the case study of
        the patient's journey through the diagnosis and research findings.
      </Text>

      <Text p>
        Surgical specimens obtained from the patient's case include:
        <List>
          <li>
            <strong>Specimen A: Excision of Melanoma</strong> - The primary
            focus of the surgical procedure was the precise removal of the
            melanoma, a 40-year-old patient's skin cancer. The excision aimed at
            achieving clear margins to ensure effective removal of cancerous
            cells.
          </li>
          <li>
            <strong>Specimen B: Sentinel Lymph Node Biopsy</strong> - In
            addition to the excision, a sentinel lymph node biopsy was performed
            to assess whether cancer cells had spread to nearby lymph nodes.
            This step is crucial in determining the extent of the disease and
            guiding further treatment decisions.
          </li>
        </List>
      </Text>

      <Text p>
        The examination of these specimens plays a pivotal role in understanding
        the nature of the melanoma and its potential impact on the patient's
        overall health. Detailed analysis, including histopathological
        examination, helps in confirming the diagnosis, evaluating the stage of
        the disease, and providing insights into the biological behavior of the
        cancer cells.
      </Text>

      <Text p>
        The findings from these surgical specimens contribute significantly to
        the overall case study, offering clinicians valuable information for
        devising a tailored treatment plan. This multidisciplinary approach,
        involving both surgical and pathological assessments, ensures a
        comprehensive understanding of the patient's condition and aids in
        delivering personalized and effective care.
      </Text>
    </PageLayout>
  );
};

export default CaseStudy;
