import { useFormik } from "formik";
import useRenderCounter from "../useRenderCount";

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

export default function SimpleForm() {
  const renderCounter = useRenderCounter();

  const formik = useFormik<IFormInput>({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: undefined,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1>Simple Form</h1>
      <p> Rendercount {renderCounter}</p>

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

        <label>Last Name</label>
        <input
          type="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          placeholder="Last Name"
        />

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
