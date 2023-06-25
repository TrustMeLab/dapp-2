import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

interface IFormValues {
  paymentAmount?: string
  paymentToken?: string
  paymentInterval?: string
  currencyPair?: string
  startDate?: string
  platformId?: string
  title?: string
  description?: string
  address?: string
  keywords?: string[]
  images?: string[]
  cid?: string
}

const validationSchema = Yup.object({
  //TODO to complete
  userId: Yup.string().required('userId is required'),
})
const SecondLeaseFormBlock = () => {
  const initialValues: IFormValues = {
    paymentAmount: '',
    paymentToken: '',
    paymentInterval: '',
    currencyPair: '',
    startDate: '',
    platformId: '',
    cid: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className="grid grid-cols-1 gap-6 border border-gray-200 rounded-md p-8">
            <label className="block">
              <span className="text-gray-700">Title</span>
              <Field
                type="text"
                id="title"
                name="title"
                className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
              />
              <span className="text-red-500">
                <ErrorMessage name="title" />
              </span>
            </label>

            <label className="block">
              <span className="text-gray-700">About</span>
              <Field
                as="textarea"
                id="about"
                name="about"
                className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
              />
              <span className="text-red-500">
                <ErrorMessage name="about" />
              </span>
            </label>

            <label className="block">
              <span className="text-gray-700">Keywords</span>
              <Field
                type="text"
                id="keywords"
                name="keywords"
                className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="keyword1, keyword2..."
              />
              <span className="text-red-500">
                <ErrorMessage name="keywords" />
              </span>
            </label>

            <div className="flex">
              <label className="block flex-1 mr-4">
                <span className="text-gray-700">Amount</span>
                <Field
                  type="number"
                  id="rateAmount"
                  name="rateAmount"
                  className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
                <span className="text-red-500 mt-2">
                  <ErrorMessage name="rateAmount" />
                </span>
              </label>
              <label className="block">
                <span className="text-gray-700">Token</span>
                <Field
                  component="select"
                  id="rateToken"
                  name="rateToken"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                  // onChange={(e: { target: { value: string } }) => {
                  //   const token = allowedTokenList.find((token) => token.address === e.target.value)
                  //   setSelectedToken(token)
                  //   setFieldValue('rateToken', e.target.value)
                  // }}
                >
                  <option value="">Select a token</option>
                  {/*{allowedTokenList.map((token, index) => (*/}
                  {/*  <option key={index} value={token.address}>*/}
                  {/*    {token.symbol}*/}
                  {/*  </option>*/}
                  {/*))}*/}
                  <option value="0x0">ETH</option>
                  <option value="0x1">USDC</option>
                  <option value="0x2">DAI</option>
                </Field>
                <span className="text-red-500">
                  <ErrorMessage name="rateToken" />
                </span>
              </label>
            </div>

            {/*<SubmitButton isSubmitting={isSubmitting} label="Post" />*/}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SecondLeaseFormBlock
