"use client";
import { useState } from "react";

export default function OpportunityOptions({}) {
  const [filter, setFilter] = useState("");
  return (
    <div className="rounded border bg-transparent p-3">
      <h4>Business & Opportunity</h4>
      <select
        className="w-full border rounded p-2 bg-transparent text-gray-400"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="" selected disabled>
          Select
        </option>
        <option value="agriculture">Agriculture</option>
        <option value="bee">Bee Keeping</option>
        <option value="general">General</option>
        <option value="cv">CV, Employment or Talents</option>
        <option value="manufacturing">Manufacturing</option>
        <option value="foods">Foods & Beverage</option>
        <option value="radio">Radio & TVs</option>
        <option value="tourism">Tourism</option>
        <option value="communication">Communication & Networks</option>
        <option value="eduction">Education Provision</option>
        <option value="health">Health Services</option>
      </select>
    </div>
  );
}
