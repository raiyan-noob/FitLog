import MyPlanPage from "../Pages/PlanPage/page";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const initialTab = params?.tab === "saved" ? "saved" : "plan";

  return <MyPlanPage initialTab={initialTab} />;
}
