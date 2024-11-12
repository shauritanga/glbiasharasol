"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/actions/register";

export default function SignupForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState("student");

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const result = await registerUser(formData, option);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
        className: "bg-green-500 text-white",
      });
      // Redirect to dashboard or home page after successful signup
      router.push("/login");
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  }

  return (
    <ToastProvider>
      <div className="flex flex-col items-center min-h-screen bg-red-100">
        <form
          action={handleSubmit}
          className="w-[50vw] space-y-4 bg-white p-8 rounded-lg shadow-md m-8"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <div className="flex w-full">
            <Button
              onClick={() => setOption("student")}
              variant="link"
              className={`w-full ${
                option === "student" ? "bg-blue-600 text-white" : ""
              }`}
            >
              Student
            </Button>
            <Button
              onClick={() => setOption("other")}
              variant="link"
              className={`w-full ${
                option === "other" ? "bg-blue-600 text-white" : ""
              }`}
            >
              Other
            </Button>
          </div>

          {option === "student" ? (
            <>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                <div className=" flex-col space-y-2 w-full">
                  <Label htmlFor="school">Education institution</Label>
                  <select
                    name="institution"
                    className="w-full p-2 border rounded bg-transparent"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="olympio">Olympio</option>
                    <option value="kairuki">Kairuki</option>
                    <option value="mwananyamara">Mwananyamara</option>
                    <option value="mikocheni">Mikocheni</option>
                    <option value="kijitonyama">Kijitonyama</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="level">Level</Label>
                  <Input
                    id="level"
                    name="level"
                    type="text"
                    required
                    placeholder="Enter your class level"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    name="region"
                    type="text"
                    required
                    placeholder="Enter your region"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    type="text"
                    required
                    placeholder="Enter your district"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="ward">Ward</Label>
                  <Input
                    id="ward"
                    name="ward"
                    type="text"
                    required
                    placeholder="Enter your ward"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="village">Street/Village</Label>
                  <Input
                    id="village"
                    name="village"
                    type="text"
                    required
                    placeholder="Enter your street"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="phone">Parent phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your football club"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="club">Football club</Label>
                  <Input
                    id="club"
                    name="club"
                    type="text"
                    required
                    placeholder="Enter your football club"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </>
          ) : (
            <>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="profession">Profession</Label>
                  <select
                    name="profession"
                    className="w-full p-2 rounded border bg-transparent"
                  >
                    <option value="" selected disabled>
                      Select
                    </option>
                    <option value="doctor">Doctor (MD)</option>
                    <option value="nurse">Nurse (RN, LPN)</option>
                    <option value="surgeon">Surgeon</option>
                    <option value="dentist">Dentist</option>
                    <option value="pharmacist">Pharmacist</option>
                    <option value="physician_assistant">
                      Physician Assistant
                    </option>
                    <option value="psychiatrist">Psychiatrist</option>
                    <option value="psychologist">Psychologist</option>
                    <option value="therapist">
                      Therapist (Physical, Occupational, Speech)
                    </option>
                    <option value="paramedic">Paramedic</option>
                    <option value="radiologist">Radiologist</option>
                    <option value="anesthesiologist">Anesthesiologist</option>
                    <option value="optometrist">Optometrist</option>
                    <option value="chiropractor">Chiropractor</option>
                    <option value="veterinarian">Veterinarian</option>
                    <option value="medical_technologist">
                      Medical Technologist
                    </option>
                    <option value="healthcare_administrator">
                      Healthcare Administrator
                    </option>
                    <option value="health_educator">Health Educator</option>
                    <option value="biomedical_scientist">
                      Biomedical Scientist
                    </option>
                    <option value="genetic_counselor">Genetic Counselor</option>

                    <option value="civil_engineer">Civil Engineer</option>
                    <option value="mechanical_engineer">
                      Mechanical Engineer
                    </option>
                    <option value="electrical_engineer">
                      Electrical Engineer
                    </option>
                    <option value="software_engineer">Software Engineer</option>
                    <option value="chemical_engineer">Chemical Engineer</option>
                    <option value="aerospace_engineer">
                      Aerospace Engineer
                    </option>
                    <option value="environmental_engineer">
                      Environmental Engineer
                    </option>
                    <option value="structural_engineer">
                      Structural Engineer
                    </option>
                    <option value="robotics_engineer">Robotics Engineer</option>
                    <option value="industrial_engineer">
                      Industrial Engineer
                    </option>
                    <option value="biomedical_engineer">
                      Biomedical Engineer
                    </option>
                    <option value="environmental_technician">
                      Environmental Technician
                    </option>
                    <option value="construction_manager">
                      Construction Manager
                    </option>
                    <option value="database_administrator">
                      Database Administrator
                    </option>
                    <option value="network_administrator">
                      Network Administrator
                    </option>
                    <option value="web_developer">Web Developer</option>
                    <option value="data_scientist">Data Scientist</option>
                    <option value="systems_analyst">Systems Analyst</option>
                    <option value="cybersecurity_specialist">
                      Cybersecurity Specialist
                    </option>
                    <option value="ai_specialist">AI Specialist</option>

                    <option value="physicist">Physicist</option>
                    <option value="chemist">Chemist</option>
                    <option value="biologist">Biologist</option>
                    <option value="astronomer">Astronomer</option>
                    <option value="geologist">Geologist</option>
                    <option value="marine_biologist">Marine Biologist</option>
                    <option value="environmental_scientist">
                      Environmental Scientist
                    </option>
                    <option value="biochemist">Biochemist</option>
                    <option value="microbiologist">Microbiologist</option>
                    <option value="psychologist_research">
                      Psychologist (Research)
                    </option>
                    <option value="epidemiologist">Epidemiologist</option>
                    <option value="pharmacologist">Pharmacologist</option>
                    <option value="laboratory_technician">
                      Laboratory Technician
                    </option>
                    <option value="geneticist">Geneticist</option>
                    <option value="mathematician">Mathematician</option>
                    <option value="statistician">Statistician</option>
                    <option value="science_educator">Science Educator</option>
                    <option value="forensic_scientist">
                      Forensic Scientist
                    </option>
                    <option value="archaeologist">Archaeologist</option>
                    <option value="agricultural_scientist">
                      Agricultural Scientist
                    </option>

                    <option value="graphic_designer">Graphic Designer</option>
                    <option value="interior_designer">Interior Designer</option>
                    <option value="fashion_designer">Fashion Designer</option>
                    <option value="industrial_designer">
                      Industrial Designer
                    </option>
                    <option value="architect">Architect</option>
                    <option value="fine_artist">Fine Artist</option>
                    <option value="animator">Animator</option>
                    <option value="game_designer">Game Designer</option>
                    <option value="photographer">Photographer</option>
                    <option value="illustrator">Illustrator</option>
                    <option value="web_designer">Web Designer</option>
                    <option value="video_editor">Video Editor</option>
                    <option value="art_director">Art Director</option>
                    <option value="set_designer">Set Designer</option>
                    <option value="creative_director">Creative Director</option>
                    <option value="3d_modeler">3D Modeler</option>
                    <option value="sound_designer">Sound Designer</option>
                    <option value="ui_ux_designer">UI/UX Designer</option>
                    <option value="copywriter">Copywriter</option>
                    <option value="content_creator">Content Creator</option>

                    <option value="ceo">CEO (Chief Executive Officer)</option>
                    <option value="cfo">CFO (Chief Financial Officer)</option>
                    <option value="marketing_manager">Marketing Manager</option>
                    <option value="sales_manager">Sales Manager</option>
                    <option value="business_analyst">Business Analyst</option>
                    <option value="project_manager">Project Manager</option>
                    <option value="human_resources_manager">
                      Human Resources Manager
                    </option>
                    <option value="financial_analyst">Financial Analyst</option>
                    <option value="accountant">Accountant</option>
                    <option value="auditor">Auditor</option>
                    <option value="supply_chain_manager">
                      Supply Chain Manager
                    </option>
                    <option value="management_consultant">
                      Management Consultant
                    </option>
                    <option value="operations_manager">
                      Operations Manager
                    </option>
                    <option value="brand_manager">Brand Manager</option>
                    <option value="product_manager">Product Manager</option>
                    <option value="customer_service_manager">
                      Customer Service Manager
                    </option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investment_banker">Investment Banker</option>
                    <option value="real_estate_broker">
                      Real Estate Broker
                    </option>
                    <option value="retail_manager">Retail Manager</option>

                    <option value="teacher">
                      Teacher (Elementary, High School, College)
                    </option>
                    <option value="school_counselor">School Counselor</option>
                    <option value="principal">Principal</option>
                    <option value="professor">Professor</option>
                    <option value="special_education_teacher">
                      Special Education Teacher
                    </option>
                    <option value="librarian">Librarian</option>
                    <option value="tutoring_specialist">
                      Tutoring Specialist
                    </option>
                    <option value="curriculum_developer">
                      Curriculum Developer
                    </option>
                    <option value="education_administrator">
                      Education Administrator
                    </option>
                    <option value="instructional_designer">
                      Instructional Designer
                    </option>
                    <option value="esl_teacher">
                      ESL Teacher (English as a Second Language)
                    </option>
                    <option value="researcher_education">
                      Researcher (Education)
                    </option>
                    <option value="career_coach">Career Coach</option>
                    <option value="education_consultant">
                      Education Consultant
                    </option>
                    <option value="study_abroad_advisor">
                      Study Abroad Advisor
                    </option>
                    <option value="educational_psychologist">
                      Educational Psychologist
                    </option>
                    <option value="child_development_specialist">
                      Child Development Specialist
                    </option>
                    <option value="school_social_worker">
                      School Social Worker
                    </option>
                    <option value="test_developer">Test Developer</option>
                    <option value="adult_educator">Adult Educator</option>

                    <option value="lawyer">Lawyer (Attorney)</option>
                    <option value="judge">Judge</option>
                    <option value="paralegal">Paralegal</option>
                    <option value="legal_secretary">Legal Secretary</option>
                    <option value="police_officer">Police Officer</option>
                    <option value="detective">Detective</option>
                    <option value="fbi_agent">FBI Agent</option>
                    <option value="firefighter">Firefighter</option>
                    <option value="public_defender">Public Defender</option>
                    <option value="prosecutor">Prosecutor</option>
                    <option value="court_reporter">Court Reporter</option>
                    <option value="criminal_investigator">
                      Criminal Investigator
                    </option>
                    <option value="compliance_officer">
                      Compliance Officer
                    </option>
                    <option value="diplomat">Diplomat</option>
                    <option value="government_administrator">
                      Government Administrator
                    </option>
                    <option value="legislative_assistant">
                      Legislative Assistant
                    </option>
                    <option value="urban_planner">Urban Planner</option>
                    <option value="immigration_officer">
                      Immigration Officer
                    </option>
                    <option value="tax_consultant">Tax Consultant</option>
                    <option value="lobbyist">Lobbyist</option>

                    <option value="financial_planner">Financial Planner</option>
                    <option value="investment_analyst">
                      Investment Analyst
                    </option>
                    <option value="auditor">Auditor</option>
                    <option value="risk_manager">Risk Manager</option>
                    <option value="insurance_underwriter">
                      Insurance Underwriter
                    </option>
                    <option value="actuary">Actuary</option>
                    <option value="loan_officer">Loan Officer</option>
                    <option value="financial_controller">
                      Financial Controller
                    </option>
                    <option value="tax_advisor">Tax Advisor</option>
                    <option value="budget_analyst">Budget Analyst</option>
                    <option value="payroll_specialist">
                      Payroll Specialist
                    </option>
                    <option value="compliance_auditor">
                      Compliance Auditor
                    </option>
                    <option value="venture_capitalist">
                      Venture Capitalist
                    </option>
                    <option value="credit_analyst">Credit Analyst</option>
                    <option value="personal_banker">Personal Banker</option>
                    <option value="real_estate_appraiser">
                      Real Estate Appraiser
                    </option>
                    <option value="treasurer">Treasurer</option>
                    <option value="wealth_manager">Wealth Manager</option>
                    <option value="tax_examiner">Tax Examiner</option>

                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="mason">Mason</option>
                    <option value="mechanic">
                      Mechanic (Auto, Diesel, etc.)
                    </option>
                    <option value="hvac_technician">HVAC Technician</option>
                    <option value="welder">Welder</option>
                    <option value="construction_laborer">
                      Construction Laborer
                    </option>
                    <option value="roofer">Roofer</option>
                    <option value="landscaper">Landscaper</option>
                    <option value="painter">Painter (Interior/Exterior)</option>
                    <option value="cnc_operator">CNC Operator</option>
                    <option value="machinist">Machinist</option>
                    <option value="glazier">Glazier</option>
                    <option value="elevator_installer">
                      Elevator Installer
                    </option>
                    <option value="pest_control_specialist">
                      Pest Control Specialist
                    </option>
                    <option value="locksmith">Locksmith</option>
                    <option value="sheet_metal_worker">
                      Sheet Metal Worker
                    </option>
                    <option value="forklift_operator">Forklift Operator</option>
                    <option value="heavy_equipment_operator">
                      Heavy Equipment Operator
                    </option>

                    <option value="chef">Chef</option>
                    <option value="restaurant_manager">
                      Restaurant Manager
                    </option>
                    <option value="waiter">Waiter/Waitress</option>
                    <option value="bartender">Bartender</option>
                    <option value="hotel_manager">Hotel Manager</option>
                    <option value="tour_guide">Tour Guide</option>
                    <option value="event_planner">Event Planner</option>
                    <option value="housekeeper">Housekeeper</option>
                    <option value="concierge">Concierge</option>
                    <option value="barista">Barista</option>
                    <option value="sommelier">Sommelier</option>
                    <option value="food_safety_specialist">
                      Food Safety Specialist
                    </option>
                    <option value="travel_agent">Travel Agent</option>
                    <option value="flight_attendant">Flight Attendant</option>
                    <option value="casino_worker">Casino Worker</option>
                    <option value="catering_coordinator">
                      Catering Coordinator
                    </option>
                    <option value="spa_manager">Spa Manager</option>
                    <option value="personal_chef">Personal Chef</option>
                    <option value="resort_manager">Resort Manager</option>
                    <option value="tourism_director">Tourism Director</option>

                    <option value="journalist">Journalist</option>
                    <option value="editor">Editor</option>
                    <option value="public_relations_specialist">
                      Public Relations Specialist
                    </option>
                    <option value="news_anchor">News Anchor</option>
                    <option value="radio_host">Radio Host</option>
                    <option value="tv_producer">TV Producer</option>
                    <option value="social_media_manager">
                      Social Media Manager
                    </option>
                    <option value="content_strategist">
                      Content Strategist
                    </option>
                    <option value="speech_writer">Speech Writer</option>
                    <option value="blogger">Blogger/Vlogger</option>
                    <option value="photographer">Photographer</option>
                    <option value="videographer">Videographer</option>
                    <option value="press_secretary">Press Secretary</option>
                    <option value="copy_editor">Copy Editor</option>
                    <option value="marketing_communications_specialist">
                      Marketing Communications Specialist
                    </option>
                    <option value="brand_strategist">Brand Strategist</option>
                    <option value="advertising_executive">
                      Advertising Executive
                    </option>
                    <option value="public_relations_manager">
                      Public Relations Manager
                    </option>
                    <option value="media_buyer">Media Buyer</option>
                    <option value="film_director">Film Director</option>

                    <option value="truck_driver">Truck Driver</option>
                    <option value="pilot">Pilot</option>
                    <option value="air_traffic_controller">
                      Air Traffic Controller
                    </option>
                    <option value="train_conductor">Train Conductor</option>
                    <option value="ship_captain">Ship Captain</option>
                    <option value="logistics_manager">Logistics Manager</option>
                    <option value="supply_chain_coordinator">
                      Supply Chain Coordinator
                    </option>
                    <option value="delivery_driver">Delivery Driver</option>
                    <option value="taxi_driver">Taxi/Chauffeur Driver</option>
                    <option value="bus_driver">Bus Driver</option>
                    <option value="transportation_planner">
                      Transportation Planner
                    </option>
                    <option value="fleet_manager">Fleet Manager</option>
                    <option value="courier">Courier</option>
                    <option value="customs_officer">Customs Officer</option>
                    <option value="aviation_mechanic">Aviation Mechanic</option>
                    <option value="cargo_handler">Cargo Handler</option>
                    <option value="freight_forwarder">Freight Forwarder</option>
                    <option value="shipping_coordinator">
                      Shipping Coordinator
                    </option>
                    <option value="traffic_analyst">Traffic Analyst</option>
                    <option value="route_planner">Route Planner</option>

                    <option value="agronomist">Agronomist</option>
                    <option value="farmer">Farmer</option>
                    <option value="forester">Forester</option>
                    <option value="wildlife_biologist">
                      Wildlife Biologist
                    </option>
                    <option value="conservationist">Conservationist</option>
                    <option value="environmental_consultant">
                      Environmental Consultant
                    </option>
                    <option value="sustainability_specialist">
                      Sustainability Specialist
                    </option>
                    <option value="fisheries_manager">Fisheries Manager</option>
                    <option value="soil_scientist">Soil Scientist</option>
                    <option value="landscaping_architect">
                      Landscaping Architect
                    </option>
                    <option value="renewable_energy_technician">
                      Renewable Energy Technician
                    </option>
                    <option value="farm_manager">Farm Manager</option>
                    <option value="agricultural_engineer">
                      Agricultural Engineer
                    </option>
                    <option value="climate_change_analyst">
                      Climate Change Analyst
                    </option>
                    <option value="environmental_educator">
                      Environmental Educator
                    </option>
                    <option value="marine_biologist">Marine Biologist</option>
                    <option value="recycling_coordinator">
                      Recycling Coordinator
                    </option>
                    <option value="organic_food_specialist">
                      Organic Food Specialist
                    </option>
                    <option value="horticulturist">Horticulturist</option>
                    <option value="park_ranger">Park Ranger</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    placeholder="Enter your phone"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    name="region"
                    type="text"
                    required
                    placeholder="Enter your region"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    type="text"
                    required
                    placeholder="Enter your district"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="ward">Ward</Label>
                  <Input
                    id="ward"
                    name="ward"
                    type="text"
                    required
                    placeholder="Enter your ward"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="village">Street/Village</Label>
                  <Input
                    id="village"
                    name="village"
                    type="text"
                    required
                    placeholder="Enter your street"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="club">Football club</Label>
                  <Input
                    id="club"
                    name="club"
                    type="text"
                    required
                    placeholder="Enter your football club"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="business">Business</Label>
                  <select
                    name="business"
                    id="business"
                    className="w-full border rounded p-2 bg-transparent"
                  >
                    <option value="" selected disabled>
                      Select
                    </option>
                    <option value="agriculture">Agriculture</option>
                    <option value="bee">Bee Keeping</option>
                    <option value="general">General</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </>
          )}
        </form>

        {/* Custom positioned ToastViewport */}
        <ToastViewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-full max-w-md" />
      </div>
    </ToastProvider>
  );
}
