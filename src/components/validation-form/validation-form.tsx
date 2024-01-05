import { useFormik } from "formik";
import useRenderCounter from "../useRenderCount";
import * as Yup from "yup";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  gender: GenderEnum | undefined;
}

export default function ValidationForm() {
  const renderCounter = useRenderCounter();

  const formik = useFormik<IFormInput>({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: undefined,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required")
        .max(16, "Username must not be more than 16 characters"),
      lastName: Yup.string().required("Last Name is required"),
      gender: Yup.mixed<GenderEnum>()
        .oneOf(Object.values(GenderEnum))
        .required("Gender is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1>Validation Form with Yup</h1>

      <div>
        <p> Rendercount {renderCounter}</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <label>First Name</label>
        <input
          type="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          placeholder="First Name"
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label>Last Name</label>
        <input
          type="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          placeholder="Last Name"
        />

        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label>Gender Selection</label>
        <select
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled selected hidden>
            Select a gender
          </option>
          <option value="female" label="female">
            female
          </option>
          <option value="male" label="male">
            male
          </option>
          <option value="other" label="other">
            other
          </option>
        </select>

        {formik.touched.gender && formik.errors.gender ? (
          <div>{formik.errors.gender}</div>
        ) : null}

        <button
          onClick={formik.handleReset}
          disabled={!formik.dirty || formik.isSubmitting}
        >
          Reset
        </button>

        <input type="submit" />
      </form>
    </>
  );
}
