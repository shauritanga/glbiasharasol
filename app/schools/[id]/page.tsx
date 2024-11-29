import { db } from "@/lib/db";
import ParentsComponent from "@/components/parent";
import Programmes from "@/components/programs";
import Articles from "@/components/articles";
import { Parents } from "@/lib/types";
import FullHeightSlider from "@/components/slider";
import { fetchSchoolById } from "@/actions/fetch_schools";
import Opportunity from "@/components/opportunity";

const nbcs = [
  "/nbc.png",
  "/nbcmechi.jpeg",
  "/tumapesa.jpeg",
  "/atm.jpeg",
  "/wafugaji.jpeg",
];

export default async function SchoolDetailPage({ params }: { params: any }) {
  const schoolId = params.id;
  const school = await fetchSchoolById(schoolId);
  const students = school?.students;

  return (
    <div className="grid grid-cols-12 min-h-screen p-2">
      <div className="col-span-3 min-h-screen">
        <div className="border shadow-md flex flex-col p-2">
          <h3 className="text-3xl p-1">{`${school?.name} Primary`}</h3>

          <p className="text-gray-600 mb-1">School information</p>
          <table className="border">
            <tr>
              <th className="border text-left p-1">Email</th>
              <td className="text-gray-600 mb-2 border p-2">{school?.email}</td>
            </tr>
            <tr>
              <th className="border text-left p-1">Region</th>
              <td className="text-gray-600 mb-2 border p-2">
                {school?.region}
              </td>
            </tr>
            <tr>
              <th className="border text-left p-1">District</th>
              <td className="text-gray-600 mb-2 border p-2">
                {school?.district}
              </td>
            </tr>
            <tr>
              <th className="border text-left p-1">Ward</th>
              <td className="text-gray-600 mb-2 border p-2">{school?.ward}</td>
            </tr>
            <tr>
              <th className="border text-left p-1">Street</th>
              <td className="text-gray-600 border mb-2 p-2">
                {school?.street}
              </td>
            </tr>
            <tr>
              <th className="border text-left p-1">Students</th>
              <td className="text-gray-600 border mb-2 p-2">
                {school?.students.length}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="col-span-6 min-h-screen">
        {[1, 2, 3, 4, 5].map((post) => (
          <div className="h-[450px] bg-red-300 mb-4 mx-2 rounded"></div>
        ))}
      </div>
      <div className="col-span-3">
        <Opportunity />
        <div className="h-[200px] my-4">
          <FullHeightSlider linkTo={true} images={nbcs} />
        </div>
      </div>
    </div>
  );
}
