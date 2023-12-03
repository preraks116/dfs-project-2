import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

const CaseStudy = () => {
  return (
    <PageLayout pagecentered>
      <Image src="/public/histology/7.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer7.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 50-year-old patient diagnosed with renal cell carcinoma. Gain insights
        into the research and diagnosis process of renal cell carcinoma.
      </Text>

      <Text p>
        This featured case study provides in-depth insights into the research
        and diagnosis process of renal cell carcinoma in a 50-year-old patient.
        Key aspects covered in this case study include:
        <List>
          <li>
            <strong>Diagnosis Journey:</strong> A detailed exploration of the
            patient's journey from initial symptoms to the eventual diagnosis of
            renal cell carcinoma. This includes discussions on diagnostic tests,
            imaging studies, and consultation with healthcare professionals.
          </li>
          <li>
            <strong>Research Findings:</strong> Insights into the research
            findings associated with renal cell carcinoma, including information
            on the tumor characteristics, staging, and potential treatment
            options. The narrative provides a comprehensive understanding of the
            disease's complexity.
          </li>
          <li>
            <strong>Multidisciplinary Approach:</strong> Highlighting the
            importance of a multidisciplinary approach in managing renal cell
            carcinoma, encompassing the contributions of pathology, oncology,
            and radiology in delivering personalized and effective care.
          </li>
        </List>
      </Text>

      <Text p>
        Exploring this case study offers readers a deeper understanding of renal
        cell carcinoma and the intricate process involved in its diagnosis and
        research. The featured nature of this case signifies its significance in
        contributing valuable knowledge to the field of cancer care and
        research.
      </Text>
    </PageLayout>
  );
};

export default CaseStudy;
