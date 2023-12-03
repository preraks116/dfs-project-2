import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

const CaseStudy = () => {
  return (
    <PageLayout blogcentered>
      <Image src="/public/images_histo/9.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer9.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 60-year-old patient diagnosed with prostate cancer. Gain insights into
        the research and diagnosis process of prostate cancer.
      </Text>

      <Text p>
        This case study provides comprehensive insights into the research and
        diagnosis process of prostate cancer in a 60-year-old patient. Key
        aspects covered in this case study include:
        <List>
          <li>
            <strong>Diagnostic Pathway:</strong> A detailed exploration of the
            diagnostic pathway undertaken for the patient, including initial
            symptoms, diagnostic tests, and consultations with specialists in
            the field of urology and oncology.
          </li>
          <li>
            <strong>Research Findings:</strong> In-depth discussion of the
            research findings associated with prostate cancer, including the
            characterization of the tumor, staging information, and
            considerations for personalized treatment approaches.
          </li>
          <li>
            <strong>Patient Experience:</strong> Insights into the patient's
            experience throughout the research and diagnostic process,
            emphasizing the importance of patient-centered care and shared
            decision-making.
          </li>
        </List>
      </Text>

      <Text p>
        Exploring this case study offers readers valuable insights into the
        complexities of prostate cancer research and diagnosis. The narrative
        underscores the significance of multidisciplinary collaboration and
        patient-focused care in optimizing outcomes for individuals diagnosed
        with prostate cancer.
      </Text>
    </PageLayout>
  );
};

export default CaseStudy;
