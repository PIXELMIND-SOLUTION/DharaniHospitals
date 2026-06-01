// App.tsx
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import {
  Phone, Calendar, MapPin, Clock, Star, Mail, ChevronRight,
  Menu, X, Heart, Stethoscope, Baby, Scissors, Activity,
  Microscope, Syringe, Ambulance, Pill, Database, AlertCircle,
  MessageCircle, ChevronLeft, CheckCircle, Shield, Award, Users, Building2, Bone, Droplet, Footprints, Brain, Lock, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Quote, Plus, Minus, Search, Filter, Eye, TrendingUp, Home, Info, FileText, PhoneCall, Navigation, Truck, Wind, Thermometer, CloudRain, Zap, Clock as ClockIcon, Target, Leaf, ThumbsUp, Smile, HelpCircle, Video, Download, Camera, Music, Grid, List, Layout, Maximize, Minimize, Play, Pause, Volume2, VolumeX, Sun, Moon, Cloud, CloudDrizzle, CloudSnow, CloudLightning, Droplets, Wind as WindIcon, Sun as SunIcon, Moon as MoonIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Droplets as DropletsIcon, Wind as WindIcon2, Thermometer as ThermometerIcon, Compass, Navigation as NavigationIcon, Map as MapIcon, Globe as GlobeIcon, Layers, Box, Package, ShoppingCart, CreditCard, Truck as TruckIcon, MapPin as MapPinIcon, Calendar as CalendarIcon, Clock as ClockIcon2, Users as UsersIcon, Heart as HeartIcon, Award as AwardIcon, Shield as ShieldIcon, CheckCircle as CheckCircleIcon, AlertCircle as AlertCircleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, Phone as PhoneIcon, Mail as MailIcon, MessageCircle as MessageCircleIcon, Send, FileText as FileTextIcon, Download as DownloadIcon, Share2, ThumbsUp as ThumbsUpIcon, Star as StarIcon, Eye as EyeIcon, TrendingUp as TrendingUpIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, Layout as LayoutIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Play as PlayIcon, Pause as PauseIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Sun as SunIcon2, Moon as MoonIcon2, Cloud as CloudIcon2, CloudDrizzle as CloudDrizzleIcon, CloudSnow as CloudSnowIcon2, CloudLightning as CloudLightningIcon2, Droplets as DropletsIcon2, Wind as WindIcon3, Thermometer as ThermometerIcon2, Compass as CompassIcon, Navigation as NavigationIcon2, Map as MapIcon2, Globe as GlobeIcon2, Layers as LayersIcon, Box as BoxIcon, Package as PackageIcon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Truck as TruckIcon2, MapPin as MapPinIcon2, Calendar as CalendarIcon2, Clock as ClockIcon3, Users as UsersIcon2, Heart as HeartIcon2, Award as AwardIcon2, Shield as ShieldIcon2, CheckCircle as CheckCircleIcon2, AlertCircle as AlertCircleIcon2, Info as InfoIcon2, HelpCircle as HelpCircleIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MessageCircle as MessageCircleIcon2, Send as SendIcon, FileText as FileTextIcon2, Download as DownloadIcon2, Share2 as Share2Icon, ThumbsUp as ThumbsUpIcon2, Star as StarIcon2, Eye as EyeIcon2, TrendingUp as TrendingUpIcon2, Filter as FilterIcon2, Grid as GridIcon2, List as ListIcon2, Layout as LayoutIcon2, Maximize as MaximizeIcon2, Minimize as MinimizeIcon2, Play as PlayIcon2, Pause as PauseIcon2, Volume2 as Volume2Icon2, VolumeX as VolumeXIcon2, Sun as SunIcon3, Moon as MoonIcon3, Cloud as CloudIcon3, CloudDrizzle as CloudDrizzleIcon2, CloudSnow as CloudSnowIcon3, CloudLightning as CloudLightningIcon3, Droplets as DropletsIcon3, Wind as WindIcon4, Thermometer as ThermometerIcon3, Compass as CompassIcon2, Navigation as NavigationIcon3, Map as MapIcon3, Globe as GlobeIcon3, Layers as LayersIcon2, Box as BoxIcon2, Package as PackageIcon2, ShoppingCart as ShoppingCartIcon2, CreditCard as CreditCardIcon2, Truck as TruckIcon3, MapPin as MapPinIcon3, Calendar as CalendarIcon3, Clock as ClockIcon4, Users as UsersIcon3, Heart as HeartIcon3, Award as AwardIcon3, Shield as ShieldIcon3, CheckCircle as CheckCircleIcon3, AlertCircle as AlertCircleIcon3, Info as InfoIcon3, HelpCircle as HelpCircleIcon3, Phone as PhoneIcon3, Mail as MailIcon3, MessageCircle as MessageCircleIcon3, Send as SendIcon2, FileText as FileTextIcon3, Download as DownloadIcon3, Share2 as Share2Icon2, ThumbsUp as ThumbsUpIcon3, Star as StarIcon3, Eye as EyeIcon3, TrendingUp as TrendingUpIcon3, Filter as FilterIcon3, Grid as GridIcon3, List as ListIcon3, Layout as LayoutIcon3, Maximize as MaximizeIcon3, Minimize as MinimizeIcon3, Play as PlayIcon3, Pause as PauseIcon3, Volume2 as Volume2Icon3, VolumeX as VolumeXIcon3, Sun as SunIcon4, Moon as MoonIcon4, Cloud as CloudIcon4, CloudDrizzle as CloudDrizzleIcon3, CloudSnow as CloudSnowIcon4, CloudLightning as CloudLightningIcon4, Droplets as DropletsIcon4, Wind as WindIcon5, Thermometer as ThermometerIcon4, Compass as CompassIcon3, Navigation as NavigationIcon4, Map as MapIcon4, Globe as GlobeIcon4, Layers as LayersIcon4, Box as BoxIcon3, Package as PackageIcon3, ShoppingCart as ShoppingCartIcon3, CreditCard as CreditCardIcon3, Truck as TruckIcon4, MapPin as MapPinIcon4, Calendar as CalendarIcon4, Clock as ClockIcon5, Users as UsersIcon4, Heart as HeartIcon4, Award as AwardIcon4, Shield as ShieldIcon4, CheckCircle as CheckCircleIcon4, AlertCircle as AlertCircleIcon4, Info as InfoIcon4, HelpCircle as HelpCircleIcon4, Phone as PhoneIcon4, Mail as MailIcon4, MessageCircle as MessageCircleIcon4, Send as SendIcon3, FileText as FileTextIcon4, Download as DownloadIcon4, Share2 as Share2Icon3, ThumbsUp as ThumbsUpIcon4, Star as StarIcon4, Eye as EyeIcon4, TrendingUp as TrendingUpIcon4, Filter as FilterIcon4, Grid as GridIcon4, List as ListIcon4, Layout as LayoutIcon4, Maximize as MaximizeIcon4, Minimize as MinimizeIcon4, Play as PlayIcon4, Pause as PauseIcon4, Volume2 as Volume2Icon4, VolumeX as VolumeXIcon4
} from 'lucide-react';
import { GiKidneys } from 'react-icons/gi';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';



const SEO = ({ title, description, canonical, keywords, ogImage, schema }) => {
  const siteUrl = 'https://dharanihospitals.com';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{title} | Dharani Hospitals</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "Dharani Hospitals, Best Hospital in Rajahmundry, Vascular Hospital, Multispeciality Hospital, Emergency Hospital, 24 Hours Hospital, Vascular Surgeon, Hospital near Devi Chowk, Hospital in Lakshmivarapupeta"} />
      <meta name="author" content="Dharani Hospitals" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Rajahmundry" />
      <meta name="geo.position" content="17.0079;81.7739" />
      <meta name="ICBM" content="17.0079, 81.7739" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={`${title} | Dharani Hospitals`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dharani Hospitals" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Dharani Hospitals`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Canonical Tag */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

/* ─────────────────────────────────────────────
   DATA (UPDATED FOR SEO)
───────────────────────────────────────────── */
const services = [
  { id: 1, name: 'General Medicine', icon: Stethoscope, description: 'Comprehensive primary care for fever, diabetes, BP, infections, thyroid, and chronic diseases with accurate diagnosis & preventive care.', department: 'Medicine', color: 'from-blue-500 to-cyan-500', slug: 'general-medicine', keywords: 'general physician in Rajahmundry, internal medicine specialist, diabetes treatment, hypertension care' },
  { id: 2, name: 'Vascular Surgery', icon: Activity, description: 'Advanced treatment for varicose veins, diabetic foot, peripheral artery disease, vascular blockages & leg pain using minimally invasive techniques.', department: 'Vascular Care', color: 'from-rose-500 to-pink-500', slug: 'vascular-surgery', keywords: 'vascular surgeon in Rajahmundry, varicose veins treatment, diabetic foot care, peripheral artery disease treatment, vascular hospital in Rajahmundry' },
  { id: 3, name: 'Gynecology', icon: Baby, description: "Complete women's healthcare including pregnancy care, normal & high-risk delivery, PCOS treatment, and menstrual disorder management.", department: "Women's Health", color: 'from-purple-500 to-violet-500', slug: 'gynecology', keywords: "gynecologist in Rajahmundry, pregnancy care, high-risk delivery, PCOS treatment, women's health hospital" },
  { id: 4, name: 'General Surgery', icon: Scissors, description: 'Expert surgical care for appendix, hernia, gallbladder, and other major/minor procedures with modern operation theatres.', department: 'Surgery', color: 'from-amber-500 to-orange-500', slug: 'general-surgery', keywords: 'general surgeon in Rajahmundry, hernia surgery, appendix surgery, gallbladder surgery, laparoscopic surgery' },
  { id: 5, name: 'Cardiology', icon: Heart, description: 'Complete heart care including diagnostics, interventions, and rehabilitation for cardiac conditions.', department: 'Cardiac Sciences', color: 'from-red-500 to-rose-500', slug: 'cardiology', keywords: 'cardiologist in Rajahmundry, heart specialist, cardiac treatment, heart attack care, angioplasty' },
  { id: 6, name: 'Orthopedics', icon: Bone, description: 'Expert treatment for fractures, joint pain, arthritis, sports injuries, and spine disorders with trauma care.', department: 'Orthopedics', color: 'from-green-500 to-emerald-500', slug: 'orthopedics', keywords: 'orthopedic doctor in Rajahmundry, fracture treatment, joint pain relief, arthritis care, sports injury treatment' },
  { id: 7, name: 'Neurology', icon: Brain, description: 'Advanced care for stroke, headache, seizures, epilepsy, nerve disorders, and paralysis treatment.', department: 'Neurosciences', color: 'from-indigo-500 to-blue-500', slug: 'neurology', keywords: 'neurologist in Rajahmundry, stroke treatment, epilepsy care, headache specialist, nerve disorder treatment' },
  { id: 8, name: 'Pediatrics', icon: Baby, description: 'Specialized healthcare for children including fever treatment, vaccination, nutrition guidance, and newborn care.', department: 'Pediatrics', color: 'from-teal-500 to-cyan-500', slug: 'pediatrics', keywords: 'pediatrician in Rajahmundry, child specialist, vaccination center, newborn care, fever treatment for kids' },
  { id: 9, name: 'Nephrology', icon: GiKidneys, description: 'Comprehensive kidney care including kidney disease treatment, dialysis support, hypertension & diabetic kidney management.', department: 'Nephrology', color: 'from-sky-500 to-blue-500', slug: 'nephrology', keywords: 'nephrologist in Rajahmundry, kidney specialist, dialysis center, kidney disease treatment, hypertension management' },
  { id: 10, name: 'Urology', icon: Droplet, description: 'Advanced treatment for kidney stones, urinary infections, prostate care, and male urology disorders.', department: 'Urology', color: 'from-indigo-500 to-purple-500', slug: 'urology', keywords: 'urologist in Rajahmundry, kidney stone treatment, urinary infection treatment, prostate care, male urology' },
  { id: 11, name: 'Endovascular Surgery', icon: Activity, description: 'Minimally invasive procedures including angioplasty, stenting, AV fistula, and peripheral vascular interventions.', department: 'Vascular Care', color: 'from-pink-500 to-rose-500', slug: 'endovascular-surgery', keywords: 'endovascular surgeon in Rajahmundry, angioplasty, stenting, AV fistula creation, peripheral vascular intervention' },
  { id: 12, name: 'Diabetology', icon: Droplet, description: 'Specialized care for diabetes management, prevention of complications, and lifestyle guidance.', department: 'Medicine', color: 'from-orange-500 to-red-500', slug: 'diabetology', keywords: 'diabetologist in Rajahmundry, diabetes management, blood sugar control, diabetic complication prevention' },
];

const doctors = [
  {
    id: 1,
    name: "Dr. V.N.V.R. Satish",
    specialization: "General Surgery",
    education: "DNB (General Surgery), FNB (Minimal Access Surgery)",
    experience: 12,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    bio: "Dr. Satish is a renowned general and laparoscopic surgeon with over 12 years of experience in performing complex surgical procedures with precision."
  },
  {
    id: 2,
    name: "Dr. M. Rajalakshmi",
    specialization: "Neurology",
    education: "MBBS, MD (General Medicine), DRNB Neurology",
    experience: 10,
    available: true,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80",
    bio: "Dr. Rajalakshmi is a leading neurologist specializing in stroke management, epilepsy treatment, and comprehensive neurological care."
  },
  {
    id: 3,
    name: "Dr. MG Srinivasa Sarma",
    specialization: "Anaesthesiology",
    education: "MD (Anaesthesia), Consultant Anaesthesiologist & Intensivist",
    experience: 9,
    available: false,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80",
    bio: "Dr. Sarma is an expert anaesthesiologist providing safe anaesthesia care for all types of surgical procedures."
  },
  {
    id: 4,
    name: "Dr. Chenna Kesava Keerthi Madireddi",
    specialization: "General Medicine",
    education: "MBBS, MD (General Medicine)",
    experience: 8,
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
    bio: "Dr. Keerthi is a dedicated physician providing comprehensive care for diabetes, hypertension, and chronic diseases."
  },
  {
    id: 5,
    name: "Dr. Chandini",
    specialization: "Obstetrics & Gynecology",
    education: "MBBS, MS (OBGY)",
    experience: 7,
    available: true,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80",
    bio: "Dr. Chandini is a compassionate gynecologist specializing in high-risk pregnancy care and women's health issues."
  },
  {
    id: 6,
    name: "Dr. K. Surya Prakash",
    specialization: "Vascular Surgery",
    education: "MBBS, MS, MCh (Vascular Surgery)",
    experience: 15,
    available: true,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&q=80",
    bio: "Dr. Surya Prakash is a leading vascular surgeon in Rajahmundry with expertise in varicose veins, diabetic foot, and vascular blockages treatment."
  }
];

const testimonials = [
  { id: 1, name: 'Srinivas Rao', rating: 5, text: "Excellent care and compassionate staff. My father's vascular surgery at Dharani Hospitals was successful and recovery was quick. Best hospital near Devi Chowk!", date: '2024-02-15', location: 'Rajahmundry', treatment: 'Vascular Surgery' },
  { id: 2, name: 'Devi Priya', rating: 5, text: 'State-of-the-art facilities and very professional service at Dharani Hospitals. The maternity ward was exceptional with caring nurses. Highly recommended for women\'s healthcare!', date: '2024-02-10', location: 'Lakshmivarapupeta', treatment: 'Maternity Care' },
  { id: 3, name: 'Satish Kumar', rating: 4, text: 'Good experience overall at Dharani Hospitals. The emergency response was quick and efficient. The doctors are very knowledgeable and treatment was effective for my diabetic condition.', date: '2024-02-05', location: 'Rajahmundry', treatment: 'Diabetes Management' },
  { id: 4, name: 'Lakshmi Nair', rating: 5, text: "Best multispeciality hospital in Rajahmundry! The vascular surgery department at Dharani Hospitals is top-notch. Dr. Surya Prakash performed my husband's varicose veins treatment with great care.", date: '2024-01-28', location: 'Devi Chowk', treatment: 'Vascular Treatment' },
  { id: 5, name: 'Venkateswarlu', rating: 5, text: "24 hours emergency service at Dharani Hospitals saved my life when I had a heart attack. The rapid response team and ICU care are excellent.", date: '2024-01-20', location: 'Rajahmundry', treatment: 'Emergency Care' },
  { id: 6, name: 'Rajyalakshmi', rating: 5, text: "I was looking for a hospital near Devi Chowk and found Dharani Hospitals. The orthopedic team treated my fracture very well. Highly recommended!", date: '2024-01-15', location: 'Lakshmivarapupeta', treatment: 'Orthopedics' },
];

const facilities = [
  { name: 'Intensive Care Unit', icon: Database, description: '24/7 critical care monitoring with advanced life support systems for emergency & trauma patients.', specs: 'Fully Equipped ICU', slug: 'icu-facility' },
  { name: 'Modern Laboratory', icon: Microscope, description: 'Advanced diagnostic equipment for accurate test results and rapid diagnostics.', specs: 'Rapid Reports', slug: 'diagnostic-lab' },
  { name: '24/7 Pharmacy', icon: Pill, description: 'Full-service pharmacy with genuine medicines and free home delivery options.', specs: 'Genuine Medicines', slug: 'pharmacy' },
  { name: 'Emergency Services', icon: Ambulance, description: 'Rapid response team with advanced life support ambulances available 24/7.', specs: 'Response: 10 mins', slug: 'emergency-services' },
  { name: 'Cath Lab', icon: Heart, description: 'Advanced cardiac catheterization laboratory for angioplasty and stenting procedures.', specs: 'Modern Technology', slug: 'cath-lab' },
  { name: 'Operation Theatres', icon: Scissors, description: 'Modular OTs with laminar airflow for safe and effective surgical procedures.', specs: '8 Modular OTs', slug: 'operation-theatres' },
  { name: 'Dialysis Center', icon: Activity, description: 'Advanced dialysis care with modern machines, expert monitoring, and hygienic environment.', specs: 'Affordable Dialysis', slug: 'dialysis-center' },
  { name: 'Trauma Care', icon: Ambulance, description: 'Specialized trauma care unit for accident victims and emergency surgical interventions.', specs: '24/7 Available', slug: 'trauma-care' },
];

const blogPosts = [
  { id: 1, title: 'Understanding Vascular Health: Preventing Leg Pain & Swelling', excerpt: 'Learn about lifestyle changes that can significantly reduce your risk of vascular diseases and improve blood circulation. Expert tips from the best vascular hospital in Rajahmundry.', date: '2024-02-20', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80', category: 'Vascular Care', slug: 'understanding-vascular-health-preventing-leg-pain-swelling', readTime: '5 min read' },
  { id: 2, title: 'Advances in Minimally Invasive Vascular Surgery', excerpt: 'Discover how endovascular techniques like angioplasty and stenting are reducing recovery time dramatically. Learn why Dharani Hospitals is the leading vascular hospital in Rajahmundry.', date: '2024-02-15', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop&q=80', category: 'Surgery', slug: 'advances-in-minimally-invasive-vascular-surgery', readTime: '4 min read' },
  { id: 3, title: "Women's Health: Essential Annual Checkups Every Woman Needs", excerpt: 'Regular gynecological screenings can detect issues early. Here is what you need to know about your health in Rajahmundry. Expert advice from Dharani Hospitals.', date: '2024-02-10', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop&q=80', category: "Women's Health", slug: 'womens-health-essential-annual-checkups', readTime: '6 min read' },
  { id: 4, title: 'Recognizing Stroke Symptoms: Act FAST to Save Lives', excerpt: 'Learn to identify the early warning signs of stroke and understand why immediate treatment at a multispeciality hospital in Rajahmundry is crucial.', date: '2024-02-05', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop&q=80', category: 'Neurology', slug: 'recognizing-stroke-symptoms-act-fast', readTime: '5 min read' },
  { id: 5, title: 'Managing Diabetes: Lifestyle Changes That Make a Difference', excerpt: 'Effective strategies for diabetes management from the best hospital in Rajahmundry. Tips on diet, exercise, and medication adherence.', date: '2024-01-28', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop&q=80', category: 'Diabetes', slug: 'managing-diabetes-lifestyle-changes', readTime: '7 min read' },
  { id: 6, title: 'When to Visit a Vascular Surgeon: Warning Signs You Shouldn\'t Ignore', excerpt: 'Leg pain, swelling, and non-healing wounds could indicate vascular disease. Find out when to consult a vascular surgeon in Rajahmundry.', date: '2024-01-20', image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&h=400&fit=crop&q=80', category: 'Vascular Care', slug: 'when-to-visit-vascular-surgeon', readTime: '5 min read' },
];

const stats = [
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '100K+', label: 'Happy Patients', icon: Users },
  { value: '50+', label: 'Expert Doctors', icon: Stethoscope },
  { value: '98%', label: 'Patient Satisfaction', icon: Heart },
  { value: '24/7', label: 'Emergency Services', icon: Ambulance },
  { value: '8+', label: 'Modern OTs', icon: Scissors },
];

const faqs = [
  {
    question: "What makes Dharani Hospitals the best hospital in Rajahmundry?",
    answer: "Dharani Hospitals is recognized as one of the best hospitals in Rajahmundry due to our advanced medical infrastructure, experienced doctors, 24/7 emergency services, affordable healthcare, and patient-centric approach. We offer comprehensive multispeciality care under one roof near Devi Chowk."
  },
  {
    question: "Do you have emergency services available 24 hours?",
    answer: "Yes, Dharani Hospitals provides 24/7 emergency medical services with rapid response teams, ICU support, trauma care, and ambulance assistance. We are a trusted emergency hospital in Rajahmundry for all types of medical emergencies."
  },
  {
    question: "Where is Dharani Hospitals located?",
    answer: "Dharani Hospitals is conveniently located near Devi Chowk in Lakshmivarapupeta, Rajahmundry – 533103, Andhra Pradesh. We are easily accessible from all parts of the city."
  },
  {
    question: "Do you have vascular surgeons in Rajahmundry?",
    answer: "Yes, Dharani Hospitals has experienced vascular surgeons in Rajahmundry specializing in varicose veins treatment, diabetic foot care, peripheral artery disease, and minimally invasive vascular procedures."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept all major health insurance plans including AB-PMJAY (Ayushman Bharat), government health schemes, and corporate insurance. Our insurance desk provides hassle-free cashless treatment approval assistance."
  },
  {
    question: "How can I book an appointment at Dharani Hospitals?",
    answer: "You can book an appointment by calling our helpline, using the online booking form on our website, or by visiting our hospital near Devi Chowk, Rajahmundry. Walk-in consultations are also available."
  },
  {
    question: "What types of vascular treatments do you offer?",
    answer: "As a leading vascular hospital in Rajahmundry, we offer varicose veins treatment (laser and non-laser), diabetic foot care, peripheral artery disease management, vascular blockage treatment, AV fistula creation, and endovascular procedures."
  },
  {
    question: "Is Dharani Hospitals a multispeciality hospital?",
    answer: "Yes, Dharani Hospitals is a premier multispeciality hospital in Rajahmundry offering over 12 specialties including general medicine, vascular surgery, cardiology, neurology, orthopedics, gynecology, pediatrics, and more under one roof."
  }
];

// FAQ Schema Generator
const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Hospital Schema
const generateHospitalSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "Dharani Hospitals",
  "alternateName": "Dharani Vascular Multispeciality Hospital",
  "description": "Dharani Hospitals is the best multispeciality and vascular hospital in Rajahmundry offering 24/7 emergency care, advanced surgery, and experienced doctors near Devi Chowk, Lakshmivarapupeta.",
  "url": "https://dharanihospitals.com",
  "logo": "https://dharanihospitals.com/logo.png",
  "image": "https://dharanihospitals.com/og-image.jpg",
  "telephone": "+919876543210",
  "email": "care@dharanihospital.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Devi Chowk, Lakshmivarapupeta",
    "addressLocality": "Rajahmundry",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "533103",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.0079,
    "latitude": 81.7739
  },
  "openingHours": ["Mo-Su 00:00-23:59"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "availableLanguage": ["English", "Telugu", "Hindi"],
  "hasMap": "https://maps.google.com/?cid=ac3d96bbd21b5040",
  "medicalSpecialty": ["Vascular Surgery", "General Medicine", "Cardiology", "Neurology", "Orthopedics", "Gynecology", "Pediatrics", "Urology", "Nephrology", "Emergency Medicine"],
  "award": "Best Multispeciality Hospital in Rajahmundry"
});

// Organization Schema
const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Dharani Hospitals",
  "url": "https://dharanihospitals.com",
  "logo": "https://dharanihospitals.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919876543210",
    "contactType": "customer service",
    "availableLanguage": ["English", "Telugu", "Hindi"]
  },
  "sameAs": [
    "https://facebook.com/dharanihospitals",
    "https://twitter.com/dharanihospitals",
    "https://instagram.com/dharanihospitals",
    "https://linkedin.com/company/dharanihospitals"
  ]
});

// LocalBusiness Schema
const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dharani Hospitals - Best Hospital in Rajahmundry",
  "image": "https://dharanihospitals.com/og-image.jpg",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Devi Chowk, Lakshmivarapupeta",
    "addressLocality": "Rajahmundry",
    "addressRegion": "AP",
    "postalCode": "533103",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.0079,
    "longitude": 81.7739
  },
  "url": "https://dharanihospitals.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1500"
  },
  "priceRange": "₹₹"
});

/* ─────────────────────────────────────────────
   SCROLL ANIMATION HOOK
───────────────────────────────────────────── */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────────
   STICKY BUTTONS COMPONENT
───────────────────────────────────────────── */
const StickyButtons = () => {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3">
      <a
        href="tel:+919876543210"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 text-white" />
        <span className="absolute right-14 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now: +91 98765 43210
        </span>
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="absolute right-14 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp: +91 98765 43210
        </span>
      </a>
      <button
        onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Book Appointment"
      >
        <Calendar className="w-5 h-5 text-white" />
        <span className="absolute right-14 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Book Appointment
        </span>
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', s);
    return () => window.removeEventListener('scroll', s);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group font-bold text-xl text-gray-800">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="Dharani Hospitals Logo" className="object-contain" />
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <li key={l.name}>
              <a href={l.href}
                className="relative font-medium text-sm text-gray-700 transition-colors hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
            <Phone className="w-4 h-4" /> Emergency: +91 98765 43210
          </a>
          <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-200">
            Book Now
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'} bg-white border-t border-gray-100 shadow-xl`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <li key={l.name}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium hover:text-blue-600 transition-colors block py-1">{l.name}</a>
            </li>
          ))}
          <li><a href="tel:+919876543210" className="flex items-center gap-2 text-emerald-600 font-semibold"><Phone className="w-4 h-4" /> Call Emergency</a></li>
          <li><button onClick={() => { setOpen(false); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2.5 rounded-full font-semibold w-full">Book Appointment</button></li>
        </ul>
      </div>
    </header>
  );
};


const Breadcrumbs = ({ items }) => {
  return (
    <nav className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8 text-sm" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          </li>
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <a href={item.path} className="text-gray-600 hover:text-blue-600 transition-colors">{item.name}</a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};


const SEOLandingPage = ({ title, metaDescription, h1, content, keywords, sections = [], canonical }) => {
  const [ref, inView] = useInView();

  // Schema for this landing page - LocalBusiness
  const landingPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `Dharani Hospitals - ${title}`,
    "description": metaDescription,
    "url": `https://dharanihospitals.com${canonical || ''}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Devi Chowk, Lakshmivarapupeta",
      "addressLocality": "Rajahmundry",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "533103",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <>
      <SEO
        title={title}
        description={metaDescription}
        canonical={canonical}
        keywords={keywords}
        schema={landingPageSchema}
      />
      <Breadcrumbs items={[{ name: title, path: canonical || '/' }]} />

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {h1}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {metaDescription}
            </p>
          </div>

          <div className="prose prose-lg max-w-none mx-auto">
            {content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {sections.map((section, idx) => (
            <div key={idx} className="mt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="prose prose-lg max-w-none">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Internal linking section */}
          <div className="mt-16 p-6 bg-blue-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services at Dharani Hospitals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a href="/#services" className="text-blue-600 hover:text-blue-800 text-sm">All Services</a>
              <a href="/vascular-hospital-in-rajahmundry" className="text-blue-600 hover:text-blue-800 text-sm">Vascular Hospital</a>
              <a href="/multispeciality-hospital-in-rajahmundry" className="text-blue-600 hover:text-blue-800 text-sm">Multispeciality Hospital</a>
              <a href="/emergency-hospital-in-rajahmundry" className="text-blue-600 hover:text-blue-800 text-sm">Emergency Hospital</a>
              <a href="/24-hours-hospital-in-rajahmundry" className="text-blue-600 hover:text-blue-800 text-sm">24 Hours Hospital</a>
              <a href="/vascular-surgeon-in-rajahmundry" className="text-blue-600 hover:text-blue-800 text-sm">Vascular Surgeon</a>
              <a href="/hospital-near-devi-chowk" className="text-blue-600 hover:text-blue-800 text-sm">Hospital Near Devi Chowk</a>
              <a href="/best-hospital-in-rajahmundry" className="text-blue-600 hover:text-blue-800 text-sm">Best Hospital</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────────
   LANDING PAGE COMPONENTS
───────────────────────────────────────────── */
const BestHospitalPage = () => (
  <SEOLandingPage
    title="Best Hospital in Rajahmundry"
    metaDescription="Dharani Hospitals is one of the best hospitals in Rajahmundry offering multispeciality treatments, emergency care, ICU support, vascular surgery, and experienced doctors near Devi Chowk. Visit us for quality healthcare."
    h1="Best Hospital in Rajahmundry"
    canonical="/best-hospital-in-rajahmundry"
    keywords="best hospital in Rajahmundry, top hospital Rajahmundry, multispeciality hospital, emergency care Rajahmundry, ICU hospital, vascular surgery Rajahmundry, affordable hospital Rajahmundry, hospital near Devi Chowk"
    content={`Dharani Hospitals is recognized as one of the best hospitals in Rajahmundry providing advanced medical care with experienced doctors, emergency support, ICU facilities, and modern treatment options.

Located near Devi Chowk in Lakshmivarapupeta, Rajahmundry, our hospital offers quality healthcare services with patient-focused treatment and affordable medical care.

We provide 24 Hours Emergency Care, ICU & Critical Care facilities, Vascular Surgery, General Medicine, Advanced Diagnostics & Scans, and Specialist Consultations across multiple departments.

Our experienced medical team is committed to delivering safe, compassionate, and advanced healthcare services for patients across Rajahmundry and nearby areas including Kakinada, Amalapuram, Mandapeta, and Kovvur.`}
    sections={[
      {
        title: "Why Choose Dharani Hospitals as Your Healthcare Partner?",
        content: `Choosing the right hospital for your medical needs is crucial for effective treatment and recovery. Dharani Hospitals stands out as the best hospital in Rajahmundry for several compelling reasons.

First, we combine medical expertise with advanced technology. Our team of highly qualified doctors, surgeons, and support staff work together to provide comprehensive care. Second, we understand that healthcare costs can be a concern, which is why we offer affordable treatment options without compromising on quality.

Third, our location near Devi Chowk makes us easily accessible to patients from all parts of Rajahmundry and surrounding areas. Whether you need emergency care, scheduled surgery, or ongoing treatment for a chronic condition, you can reach us quickly.

Fourth, we provide a wide range of specialties under one roof. From vascular surgery and cardiology to orthopedics and neurology, we have experts in every major medical field.`
      },
      {
        title: "Comprehensive Medical Services at Dharani Hospitals",
        content: `As the best hospital in Rajahmundry, we offer a complete spectrum of medical services designed to meet the needs of patients at every stage of life.

Emergency Services: Our 24/7 emergency department is equipped to handle all types of medical emergencies including heart attacks, strokes, accidents, breathing difficulties, and sudden illnesses. Our rapid response team ensures you receive immediate attention.

Vascular Care: Our vascular department is one of the most advanced in the region, offering treatment for varicose veins, diabetic foot conditions, peripheral artery disease, and vascular blockages.

General Medicine: From common fevers and infections to complex chronic diseases like diabetes, hypertension, and thyroid disorders, our physicians provide accurate diagnosis and effective treatment plans.

Surgical Services: Our modern operation theatres and skilled surgeons perform everything from minor procedures to complex surgeries including laparoscopic, general, and vascular surgeries.

Diagnostic Services: Accurate diagnosis is the first step to effective treatment. Our laboratory and imaging services deliver rapid, reliable results to guide your treatment plan.`
      },
      {
        title: "Patient Testimonials - What Our Patients Say",
        content: `"Dharani Hospitals provided excellent care for my father's vascular surgery. The doctors were professional and the staff was very supportive. I highly recommend this hospital to anyone looking for quality healthcare in Rajahmundry." - Srinivas Rao

"I was searching for a good hospital near Devi Chowk and found Dharani Hospitals. The maternity ward was exceptional and the nurses were very caring. Thank you for a safe delivery experience." - Devi Priya

"The emergency response at Dharani Hospitals saved my life when I had a heart attack. The rapid treatment and ICU care were excellent. This is truly the best hospital in Rajahmundry." - Venkateswarlu`
      }
    ]}
  />
);

const VascularHospitalPage = () => (
  <SEOLandingPage
    title="Vascular Hospital in Rajahmundry"
    metaDescription="Dharani Hospitals is a leading vascular hospital in Rajahmundry offering advanced vascular surgery, diabetic foot care, varicose veins treatment, and expert vascular specialists. Book a consultation today."
    h1="Leading Vascular Hospital in Rajahmundry"
    canonical="/vascular-hospital-in-rajahmundry"
    keywords="vascular hospital in Rajahmundry, vascular surgeon Rajahmundry, varicose veins treatment, diabetic foot care, peripheral artery disease, vascular blockage treatment, best vascular hospital"
    content={`Dharani Hospitals is a trusted vascular hospital in Rajahmundry providing advanced diagnosis and treatment for vascular diseases and circulation disorders.

Our experienced vascular surgeons in Rajahmundry specialize in varicose veins treatment, diabetic foot care, peripheral artery disease management, vascular blockage treatment, and minimally invasive vascular procedures.

With modern technology and patient-centered care, we provide effective treatment solutions for vascular conditions near Devi Chowk Rajahmundry.

Vascular health is essential for overall wellbeing. Poor blood circulation can lead to serious complications including non-healing wounds, leg pain, and even amputation. Early diagnosis and treatment are crucial.`}
    sections={[
      {
        title: "Comprehensive Vascular Treatments Available",
        content: `Our vascular hospital in Rajahmundry offers a complete range of treatments for all types of vascular conditions.

Varicose Veins Treatment: We provide both laser and non-laser treatments for varicose veins. Our minimally invasive procedures ensure faster recovery and minimal scarring.

Diabetic Foot Care: Diabetes can lead to serious foot complications. Our vascular specialists provide comprehensive diabetic foot care including wound management, infection control, and circulation improvement.

Peripheral Artery Disease (PAD): PAD occurs when arteries in the legs become narrowed or blocked. We offer advanced diagnostic and treatment options including angioplasty and stenting.

Vascular Blockage Treatment: Blockages in blood vessels can cause pain, swelling, and tissue damage. We use minimally invasive techniques to restore proper blood flow.

Deep Vein Thrombosis (DVT): Blood clots in deep veins can be life-threatening. Our team provides prompt diagnosis and effective treatment for DVT.`
      },
      {
        title: "Why Choose Dharani Hospitals for Vascular Care?",
        content: `When searching for a vascular hospital in Rajahmundry, you need a facility that combines expertise with advanced technology. Dharani Hospitals offers exactly that.

Experienced Vascular Surgeons: Our vascular surgeons have years of experience in treating complex vascular conditions. They stay updated with the latest medical advancements.

State-of-the-Art Facilities: Our vascular department is equipped with modern diagnostic tools and treatment equipment including digital angiography, Doppler ultrasound, and laser treatment systems.

Minimally Invasive Procedures: We prioritize minimally invasive techniques whenever possible. These procedures mean less pain, smaller scars, shorter hospital stays, and faster recovery.

Comprehensive Care: From initial consultation through diagnosis, treatment, and follow-up care, we provide complete support to every patient.`
      }
    ]}
  />
);

const MultispecialityHospitalPage = () => (
  <SEOLandingPage
    title="Multispeciality Hospital in Rajahmundry"
    metaDescription="Dharani Hospitals is a trusted multispeciality hospital in Rajahmundry offering emergency care, ICU, diagnostics, vascular surgery, and specialist treatments. Quality healthcare under one roof near Devi Chowk."
    h1="Multispeciality Hospital in Rajahmundry"
    canonical="/multispeciality-hospital-in-rajahmundry"
    keywords="multispeciality hospital in Rajahmundry, best multispeciality hospital, emergency care, ICU hospital, vascular surgery, specialist doctors, hospital near Devi Chowk"
    content={`Dharani Hospitals is one of the leading multispeciality hospitals in Rajahmundry providing comprehensive healthcare services under one roof.

We offer advanced medical care across multiple specialties including General Medicine, Emergency Care, Vascular Surgery, Critical Care, Diagnostics, and Preventive Healthcare.

Located near Devi Chowk Rajahmundry, our hospital is dedicated to delivering quality healthcare with modern infrastructure, experienced doctors, and affordable treatment options.

As a multispeciality hospital, we understand that different medical conditions require different expertise. That's why we bring together specialists from various fields to provide coordinated, comprehensive care.`}
    sections={[
      {
        title: "Our Medical Specialties",
        content: `Dharani Hospitals offers a wide range of medical specialties to serve the diverse healthcare needs of our community.

General Medicine: Our physicians provide primary care for common illnesses, chronic disease management, and preventive health services.

Vascular Surgery: We specialize in treating conditions affecting blood vessels including varicose veins, diabetic foot, and peripheral artery disease.

Cardiology: Complete heart care including diagnostics, interventions, and rehabilitation for cardiac conditions.

Neurology: Advanced care for stroke, headache, seizures, epilepsy, and nerve disorders.

Orthopedics: Expert treatment for fractures, joint pain, arthritis, sports injuries, and spine disorders.

Gynecology: Complete women's healthcare including pregnancy care, high-risk delivery, PCOS treatment, and menstrual disorder management.

Pediatrics: Specialized healthcare for children including fever treatment, vaccination, nutrition guidance, and newborn care.

Urology: Advanced treatment for kidney stones, urinary infections, prostate care, and male urology disorders.

Nephrology: Comprehensive kidney care including kidney disease treatment, dialysis support, and hypertension management.`
      }
    ]}
  />
);

const EmergencyHospitalPage = () => (
  <SEOLandingPage
    title="Emergency Hospital in Rajahmundry | 24 Hours Emergency Care"
    metaDescription="Dharani Hospitals provides 24 hours emergency medical services in Rajahmundry with ICU support, trauma care, emergency doctors, and rapid response treatment. Immediate care when you need it most."
    h1="24 Hours Emergency Hospital in Rajahmundry"
    canonical="/emergency-hospital-in-rajahmundry"
    keywords="emergency hospital in Rajahmundry, 24 hours hospital, emergency care, trauma center, ICU support, ambulance service, emergency doctors Rajahmundry"
    content={`Dharani Hospitals is a trusted emergency hospital in Rajahmundry offering 24/7 emergency medical care and critical support services.

Our emergency department is equipped with emergency doctors, ICU support, trauma care facilities, rapid diagnosis systems, ambulance assistance, and critical care units.

Located near Devi Chowk Rajahmundry, we provide immediate treatment for accidents, injuries, chest pain, stroke symptoms, breathing difficulties, and all types of medical emergencies.

When a medical emergency strikes, every second counts. Our rapid response team ensures that you receive prompt attention and appropriate care without delay.`}
    sections={[
      {
        title: "Emergency Services We Provide",
        content: `Our emergency department is prepared to handle all types of medical emergencies 24 hours a day, 7 days a week.

Cardiac Emergencies: Chest pain, heart attacks, and other cardiac conditions receive immediate attention with ECG, cardiac monitoring, and emergency medications.

Trauma and Accidents: Our trauma team is trained to handle road traffic accidents, falls, and other injury-related emergencies.

Stroke: Time is brain when it comes to stroke. Our rapid stroke protocol ensures quick diagnosis and treatment to minimize brain damage.

Respiratory Emergencies: Breathing difficulties, asthma attacks, and other respiratory conditions are managed by our emergency physicians.

Pediatric Emergencies: Our emergency department is equipped to handle medical emergencies in children of all ages.

Obstetric Emergencies: We provide emergency care for pregnancy-related complications including bleeding, high blood pressure, and premature labor.

ICU Support: For patients requiring intensive care, our ICU is equipped with advanced monitoring and life support systems.`
      }
    ]}
  />
);

const TwentyFourHoursHospitalPage = () => (
  <SEOLandingPage
    title="24 Hours Hospital in Rajahmundry"
    metaDescription="Dharani Hospitals is a 24 hours hospital in Rajahmundry offering emergency care, ICU support, specialist doctors, diagnostics, and advanced treatment facilities. Round-the-clock healthcare services."
    h1="24 Hours Hospital in Rajahmundry"
    canonical="/24-hours-hospital-in-rajahmundry"
    keywords="24 hours hospital in Rajahmundry, round the clock hospital, 24/7 medical care, emergency services, ICU support, night hospital, hospital open 24 hours"
    content={`Dharani Hospitals provides round-the-clock healthcare services for patients requiring immediate medical attention and continuous care.

Our hospital offers 24/7 emergency services, ICU and critical care, specialist doctors available at all times, emergency diagnostics, continuous patient monitoring, and advanced treatment facilities.

As a trusted 24 hours hospital near Devi Chowk Rajahmundry, we are committed to providing fast, reliable, and compassionate healthcare services whenever you need them.

Medical needs don't follow a 9-to-5 schedule. That's why Dharani Hospitals remains open and fully staffed 24 hours a day, every day of the year.`}
    sections={[
      {
        title: "Round-the-Clock Medical Services",
        content: `Being a 24 hours hospital in Rajahmundry means we are always ready to serve you, whether it's day or night, weekday or weekend.

24/7 Emergency Department: Our emergency team is always on duty, ready to handle any medical emergency.

24/7 Pharmacy: Our in-house pharmacy operates round the clock, ensuring you never have to search for medicines late at night.

24/7 Laboratory: Emergency diagnostic tests are processed immediately, even at odd hours.

24/7 Radiology: X-rays, CT scans, and ultrasound services are available 24 hours for emergency cases.

24/7 ICU: Our intensive care unit is staffed by critical care specialists around the clock.

24/7 Ambulance Service: Our ambulances are always ready to respond to emergency calls and transport patients to our facility.`
      }
    ]}
  />
);

const VascularSurgeonPage = () => (
  <SEOLandingPage
    title="Vascular Surgeon in Rajahmundry"
    metaDescription="Consult experienced vascular surgeons in Rajahmundry at Dharani Hospitals for varicose veins treatment, diabetic foot care, vascular blockage treatment, and advanced vascular procedures."
    h1="Experienced Vascular Surgeon in Rajahmundry"
    canonical="/vascular-surgeon-in-rajahmundry"
    keywords="vascular surgeon in Rajahmundry, best vascular surgeon, varicose veins specialist, diabetic foot doctor, vascular specialist, vascular surgery expert"
    content={`Dharani Hospitals offers advanced vascular care with experienced vascular surgeons in Rajahmundry providing specialized treatment for vascular disorders and circulation problems.

We provide treatment for varicose veins, diabetic foot conditions, vascular blockages, peripheral artery disease, leg pain and swelling, and blood circulation disorders.

Our vascular specialists use modern diagnostic methods and minimally invasive procedures to ensure effective and safe treatment outcomes.

Vascular conditions can significantly impact your quality of life. Leg pain, swelling, non-healing wounds, and varicose veins are signs that you may need to consult a vascular specialist.`}
    sections={[
      {
        title: "Meet Our Vascular Surgery Team",
        content: `Our vascular surgery department is led by highly experienced surgeons who have performed thousands of successful vascular procedures.

Dr. K. Surya Prakash is a leading vascular surgeon in Rajahmundry with over 15 years of experience. He specializes in varicose veins treatment (both laser and conventional), diabetic foot care, peripheral artery disease management, and endovascular procedures.

Dr. V.N.V.R. Satish brings expertise in general and laparoscopic surgery with a focus on vascular conditions. His experience in minimal access surgery ensures better outcomes with faster recovery.

Together with our team of anaesthesiologists, critical care specialists, and support staff, they provide comprehensive vascular care from diagnosis through treatment and follow-up.`
      },
      {
        title: "Vascular Conditions We Treat",
        content: `Our vascular surgeons in Rajahmundry diagnose and treat a wide range of vascular conditions.

Varicose Veins: Enlarged, twisted veins that can cause pain, swelling, and cosmetic concerns. We offer both laser and non-laser treatments.

Diabetic Foot: Diabetes can damage nerves and blood vessels in the feet, leading to ulcers and infections. Our comprehensive diabetic foot care program prevents complications.

Peripheral Artery Disease (PAD): Narrowed arteries reduce blood flow to the limbs, causing leg pain when walking. We offer angioplasty, stenting, and bypass surgery.

Deep Vein Thrombosis (DVT): Blood clots in deep veins can be dangerous. We provide prompt diagnosis and treatment to prevent complications.

Vascular Malformations: Abnormal formations of blood vessels can cause pain and functional problems. Our surgeons provide appropriate treatment.

Aneurysms: Bulging in blood vessel walls can be life-threatening if ruptured. We provide monitoring and surgical intervention when needed.`
      }
    ]}
  />
);

const HospitalNearDeviChowkPage = () => (
  <SEOLandingPage
    title="Hospital Near Devi Chowk Rajahmundry"
    metaDescription="Looking for a hospital near Devi Chowk Rajahmundry? Dharani Hospitals offers emergency care, vascular treatment, ICU support, and specialist doctors near Lakshmivarapupeta. Visit us today."
    h1="Best Hospital Near Devi Chowk Rajahmundry"
    canonical="/hospital-near-devi-chowk"
    keywords="hospital near Devi Chowk Rajahmundry, hospital near Lakshmivarapupeta, hospital near me Rajahmundry, best hospital near Devi Chowk, multispeciality hospital near Devi Chowk"
    content={`Dharani Hospitals is a trusted hospital near Devi Chowk Rajahmundry providing multispeciality healthcare services with experienced doctors and advanced treatment facilities.

Conveniently located in Lakshmivarapupeta near Madireddy Furniture, our hospital provides emergency medical care, ICU facilities, vascular surgery, diagnostics, specialist consultations, and affordable treatment.

We are committed to providing accessible, patient-focused, and quality healthcare services for families in and around Rajahmundry.

Being located near Devi Chowk makes us easily accessible to residents of Lakshmivarapupeta, Aryapuram, Danavaipeta, and surrounding areas. Whether you need emergency care or routine consultation, we are just a short distance away.`}
    sections={[
      {
        title: "Healthcare Services Available Near Devi Chowk",
        content: `For residents of Lakshmivarapupeta and areas near Devi Chowk, Dharani Hospitals is your trusted healthcare partner.

Emergency Care: When seconds matter, our location near Devi Chowk ensures you can reach us quickly. Our emergency department is always ready.

General Consultations: Our physicians are available for routine checkups, fever treatment, and management of chronic conditions like diabetes and hypertension.

Vascular Care: We are the leading vascular hospital near Devi Chowk, offering specialized treatment for varicose veins, diabetic foot, and circulation problems.

Women's Health: Our gynecology department provides comprehensive care including pregnancy care, delivery services, and treatment for women's health issues.

Pediatric Care: Parents near Devi Chowk trust us for their children's healthcare needs including vaccinations, fever treatment, and growth monitoring.

Surgical Services: Our operation theatres are equipped for various surgical procedures, from minor surgeries to complex operations.`
      }
    ]}
  />
);

/* ─────────────────────────────────────────────
   HERO SECTION (UPDATED WITH SEO H1)
───────────────────────────────────────────── */
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SEO: Structured data for the hero section */}
      <Helmet>
        <title>Best Multispeciality & Vascular Hospital in Rajahmundry | Dharani Hospitals</title>
        <meta name="description" content="Dharani Hospitals is the best multispeciality and vascular hospital in Rajahmundry offering 24/7 emergency care, advanced vascular surgery, experienced doctors, and affordable treatment near Devi Chowk." />
        <link rel="canonical" href="https://dharanihospitals.com/" />
      </Helmet>

      {/* BG */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop&q=80" alt="Dharani Hospitals - Best Multispeciality Hospital in Rajahmundry" className="w-full h-full object-cover scale-105" style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }} loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-teal-900/75" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" /> NABH & NABL Accredited Institution
          </span>

          {/* SEO H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Best Multispeciality &<br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Vascular Hospital in Rajahmundry</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-light">Dharani Hospitals | Near Devi Chowk, Lakshmivarapupeta</p>
          <p className="text-base text-blue-200/80 mb-10 max-w-2xl mx-auto">24 Hours Emergency | Expert Vascular Surgeons | Advanced Multispeciality Care | Affordable Healthcare</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1 transition-all duration-300">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" /> Book Appointment
            </button>
            <a href="tel:+919876543210" className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> +91 98765 43210
            </a>
          </div>

          {/* Emergency pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold animate-pulse">
              <AlertCircle className="w-4 h-4" /> Emergency: 102
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm border border-white/20">
              <Ambulance className="w-4 h-4 text-teal-300" /> Ambulance: 108
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm border border-white/20">
              <MapPin className="w-4 h-4 text-teal-300" /> Near Devi Chowk, Rajahmundry
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 0.5s' }}>
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 cursor-default group">
              <Icon className="w-5 h-5 text-teal-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-xl font-black text-white">{value}</div>
              <div className="text-[10px] text-blue-200 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-teal-400 rounded-full" style={{ animation: 'scrollDot 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   ABOUT SECTION (UPDATED WITH SEO)
───────────────────────────────────────────── */
const About = () => (
  <section id="about" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-3">About Dharani Hospitals</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
            Trusted Multispeciality Hospital<br />
            <span className="text-blue-600">Near Devi Chowk Rajahmundry</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Dharani Hospitals is recognized as one of the <strong className="text-blue-600">best hospitals in Rajahmundry</strong>, delivering compassionate healthcare with advanced medical technology. Conveniently located near <strong className="text-blue-600">Devi Chowk and Lakshmivarapupeta</strong>, we provide accessible and affordable medical care for patients from across the city.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Whether you are searching for a <strong className="text-blue-600">multispeciality hospital in Rajahmundry</strong>, a <strong className="text-blue-600">vascular hospital near Devi Chowk</strong>, or a reliable <strong className="text-blue-600">24 hours hospital in Rajahmundry</strong>, our experienced medical team is here to help you every day. We provide personalized treatment, faster recovery, and high-quality healthcare services for every patient.
          </p>

          <div className="space-y-5 mb-8">
            {[
              { icon: Heart, title: 'Our Mission', text: 'To provide accessible, high-quality healthcare with empathy and integrity, ensuring every patient receives the best possible treatment at affordable costs.' },
              { icon: Award, title: 'Our Vision', text: 'To be the most trusted healthcare institution in Rajahmundry, setting new standards in medical excellence, patient experience, and community health.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 group">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.slice(0, 4).map(({ value, label }) => (
              <div key={label} className="text-center p-4 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl text-white hover:scale-105 transition-transform duration-200 cursor-default">
                <div className="text-2xl font-black">{value}</div>
                <div className="text-xs text-blue-100 mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&h=600&fit=crop&q=80" alt="Dharani Hospitals - Best Hospital in Rajahmundry Interior" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Near Devi Chowk</div>
                <div className="text-xs text-gray-500">Lakshmivarapupeta, Rajahmundry</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl shadow-xl px-5 py-4 text-white">
              <div className="font-black text-2xl">24/7</div>
              <div className="text-xs text-blue-100">Emergency Care</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SERVICES SECTION (UPDATED WITH SEO)
───────────────────────────────────────────── */
const Services = () => {
  const [dept, setDept] = useState('all');
  const departments = ['all', ...new Set(services.map(s => s.department))];
  const filtered = dept === 'all' ? services : services.filter(s => s.department === dept);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Specialities</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2 mb-4">Comprehensive Medical Services at Dharani Hospitals</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">As the leading multispeciality hospital in Rajahmundry near Devi Chowk, we provide expert medical services across multiple departments with experienced doctors and advanced medical equipment.</p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {departments.map(d => (
            <button key={d} onClick={() => setDept(d)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${dept === d ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'}`}>
              {d === 'all' ? 'All Specialities' : d}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.id} delay={i * 0.07}>
                <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-blue-100 h-full flex flex-col">
                  <div className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{svc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{svc.department}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   VASCULAR CARE SECTION (ENHANCED)
───────────────────────────────────────────── */
const VascularCare = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="inline-block text-rose-600 font-bold text-sm uppercase tracking-widest mb-3">Vascular Care Excellence</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
            Advanced Vascular Hospital<br />
            <span className="text-rose-600">in Rajahmundry</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Searching for a reliable <strong className="text-rose-600">vascular hospital near Devi Chowk</strong> or an experienced <strong className="text-rose-600">vascular surgeon in Rajahmundry</strong>? Our vascular specialists diagnose and treat a wide range of conditions with minimally invasive procedures.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Dharani Hospitals is recognized as one of the <strong className="text-rose-600">best vascular hospitals in Rajahmundry</strong>, offering advanced treatments for varicose veins, diabetic foot conditions, peripheral artery disease, and vascular blockages using state-of-the-art technology.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              'Varicose Veins Treatment', 'Peripheral Artery Disease', 'Diabetic Foot Care', 'Vascular Blockages',
              'Leg Pain & Swelling', 'Blood Circulation Disorders', 'Non-Healing Ulcers', 'AV Fistula Procedures'
            ].map(condition => (
              <div key={condition} className="flex items-center gap-2 text-gray-700 text-sm">
                <CheckCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{condition}</span>
              </div>
            ))}
          </div>
          <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-300/40 transition-all">
            Consult Vascular Specialist <ChevronRight className="w-4 h-4" />
          </button>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop&q=80" alt="Vascular Surgery at Dharani Hospitals - Best Vascular Hospital in Rajahmundry" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-3">
              <div className="font-bold text-gray-900">Minimally Invasive</div>
              <div className="text-xs text-gray-500">Faster Recovery</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   DOCTORS SECTION (UPDATED WITH IMAGES)
───────────────────────────────────────────── */
const Doctors = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-cyan-600 font-bold text-sm uppercase tracking-[0.25em]">Our Expert Doctors</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-3 mb-5">
            Best Doctors Near Devi Chowk Rajahmundry
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            At Dharani Hospitals, we have experienced physicians, skilled vascular surgeons, emergency care experts, and diagnostic specialists dedicated to your health.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <Reveal key={doc.id} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-sky-100 shadow-lg hover:shadow-cyan-200/60 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500" />

                <div className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* pulse ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-200 scale-110 animate-pulse" />

                    {/* first letter avatar */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-4xl font-black text-white uppercase">
                        {doc.name
                          ?.replace("Dr.", "")
                          ?.trim()
                          ?.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 leading-snug">{doc.name}</h3>
                  <p className="mt-2 text-blue-700 font-bold text-md">{doc.specialization}</p>
                  <p className="mt-3 text-gray-500 text-sm">{doc.education}</p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{doc.bio}</p>

                  <div className="mt-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${doc.available ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {doc.available ? "Available Today" : "Next Available Tomorrow"}
                    </span>
                  </div>

                  <button onClick={() => setSelected(doc)} className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold shadow-lg hover:shadow-cyan-300/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-4 items-center">
                <img src={selected.image} alt={selected.name} className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-2xl font-black text-gray-900">{selected.name}</h3>
                  <p className="text-blue-700 font-semibold">{selected.specialization}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="Full Name *" className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none" />
              <input type="tel" placeholder="Phone Number *" className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none" />
              <input type="date" className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none" />
              <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none text-gray-600">
                <option>Morning (9 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (4 PM – 8 PM)</option>
              </select>
              <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold shadow-lg hover:shadow-cyan-300/40 transition-all">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* ─────────────────────────────────────────────
   EMERGENCY CARE SECTION (UPDATED)
───────────────────────────────────────────── */
const EmergencyCare = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-red-50 to-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Reveal>
          <span className="inline-block text-red-600 font-bold text-sm uppercase tracking-widest mb-3">24/7 Emergency Care</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2 mb-4">Emergency Hospital Near Devi Chowk Rajahmundry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Medical emergencies require immediate attention. Dharani Hospitals operates as a fully equipped 24 hours hospital in Rajahmundry, ready to handle any emergency situation.</p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Ambulance, title: 'Ambulance Assistance', desc: 'Rapid response with advanced life support ambulances available 24/7.', color: 'from-red-500 to-orange-500' },
          { icon: Database, title: 'Emergency ICU', desc: '24/7 critical care monitoring with advanced life support systems.', color: 'from-red-600 to-rose-500' },
          { icon: Activity, title: 'Trauma Care', desc: 'Specialized trauma team ready for accident and injury emergencies.', color: 'from-orange-500 to-red-500' },
          { icon: Stethoscope, title: 'Emergency Specialists', desc: 'Expert doctors always available for all medical emergencies.', color: 'from-rose-500 to-pink-500' },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold">
          <Phone className="w-5 h-5 animate-pulse" />
          Emergency Helpline: 102 / 108
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">24x7</span>
        </div>
        <p className="text-gray-500 text-sm mt-4">If you need an emergency hospital in Lakshmivarapupeta or Rajahmundry, our emergency team is available round the clock near Devi Chowk.</p>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   FACILITIES SECTION
───────────────────────────────────────────── */
const Facilities = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-teal-400 font-bold text-sm uppercase tracking-widest">Infrastructure</span>
        <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-4">World-Class Facilities at Dharani Hospitals</h2>
        <p className="text-blue-200 max-w-xl mx-auto">State-of-the-art equipment and infrastructure for the best patient outcomes at our multispeciality hospital in Rajahmundry.</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map(({ name, icon: Icon, description, specs }, i) => (
          <Reveal key={name} delay={i * 0.08}>
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 cursor-default h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
              <p className="text-blue-200 text-sm mb-4 leading-relaxed">{description}</p>
              <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs px-3 py-1.5 rounded-full font-semibold">{specs}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHY CHOOSE US SECTION
───────────────────────────────────────────── */
const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Why Choose Dharani Hospitals</span>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2 mb-4">Why We Are One of the Best Hospitals in Rajahmundry</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Our commitment to clinical excellence and compassionate healthcare makes us a preferred private hospital near Devi Chowk, Rajahmundry.</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Award, title: 'Experienced Medical Specialists', desc: 'Highly qualified doctors across all specialities including vascular surgery, cardiology, and neurology.' },
          { icon: Microscope, title: 'Advanced Medical Technology', desc: 'Modern equipment for accurate diagnosis including digital X-ray, ultrasound, and laboratory services.' },
          { icon: Ambulance, title: '24/7 Emergency Services', desc: 'Round-the-clock emergency care with rapid response team and ICU support.' },
          { icon: Heart, title: 'Patient-Centered Care', desc: 'Personalized treatment plans designed for each patient\'s unique medical needs.' },
          { icon: Scissors, title: 'Modern Operation Theatres', desc: '8 modular OTs with laminar airflow for safe and effective surgical procedures.' },
          { icon: Database, title: 'Advanced Diagnostics', desc: 'Rapid and accurate laboratory and imaging services for quick diagnosis.' },
          { icon: DollarSignIcon, title: 'Affordable Healthcare', desc: 'Cost-effective treatment options with insurance support and health packages.' },
          { icon: MapPin, title: 'Convenient Location', desc: 'Near Devi Chowk, Rajahmundry - easily accessible from all parts of the city.' },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <div className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const DollarSignIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

/* ─────────────────────────────────────────────
   TESTIMONIALS SECTION (UPDATED)
───────────────────────────────────────────── */
const TestimonialsSection = () => {
  const [cur, setCur] = useState(0);
  const next = () => setCur(p => (p + 1) % testimonials.length);
  const prev = () => setCur(p => (p - 1 + testimonials.length) % testimonials.length);
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Patient Stories</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2">What Our Patients Say About Dharani Hospitals</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">Read testimonials from patients who experienced quality care at the best hospital in Rajahmundry.</p>
        </Reveal>

        <Reveal delay={0.1} className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center border border-gray-100 relative overflow-hidden">
            <div className="absolute top-6 left-8 text-8xl text-blue-100 font-serif leading-none select-none">"</div>

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < testimonials[cur].rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
              ))}
            </div>
            <p className="text-gray-700 text-lg sm:text-xl italic leading-relaxed mb-8 relative z-10">
              "{testimonials[cur].text}"
            </p>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-base">{testimonials[cur].name[0]}</span>
            </div>
            <p className="font-bold text-gray-900 text-lg">{testimonials[cur].name}</p>
            <p className="text-gray-400 text-sm">{testimonials[cur].location} · {testimonials[cur].treatment} · {new Date(testimonials[cur].date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all border border-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all border border-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCur(i)}
                className={`h-2 rounded-full transition-all duration-300 ${cur === i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   FAQ SECTION WITH SCHEMA
───────────────────────────────────────────── */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Add FAQ schema to the page
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(generateFAQSchema());
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Get answers to common questions about Dharani Hospitals, our services, and facilities in Rajahmundry.</p>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="mb-4 border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? <Minus className="w-5 h-5 text-blue-600 shrink-0" /> : <Plus className="w-5 h-5 text-blue-600 shrink-0" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 bg-white text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   BLOG SECTION (UPDATED)
───────────────────────────────────────────── */
const Blog = () => (
  <section id="blog" className="py-20 lg:py-28 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Health Blog</span>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2">Latest Health Articles from Dharani Hospitals</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2">Stay informed with expert health tips, medical insights, and updates from the best hospital in Rajahmundry.</p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, i) => (
          <Reveal key={post.id} delay={i * 0.1}>
            <article className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-100 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">{post.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <time className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
          View All Articles <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   APPOINTMENT SECTION (UPDATED)
───────────────────────────────────────────── */
const Appointment = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' });
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.department && form.date) {
      setDone(true);
      setTimeout(() => setDone(false), 5000);
      setForm({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' });
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white";

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-300 font-bold text-sm uppercase tracking-widest">Schedule a Visit</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-4">Book an Appointment at Dharani Hospitals</h2>
          <p className="text-blue-100 max-w-xl mx-auto">Looking for the best hospital in Rajahmundry or a trusted multispeciality hospital near Devi Chowk? Contact our team today to schedule your consultation.</p>
        </Reveal>

        <Reveal delay={0.15} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {done && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-2xl mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-semibold">Appointment request sent! We'll confirm via SMS shortly.</span>
              </div>
            )}
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Enter your full name" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department <span className="text-red-500">*</span></label>
                  <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} className={inputCls} required>
                    <option value="">Select Department</option>
                    {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Doctor</label>
                  <select value={form.doctor} onChange={e => setForm({ ...form, doctor: e.target.value })} className={inputCls}>
                    <option value="">Any Available Doctor</option>
                    {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date <span className="text-red-500">*</span></label>
                  <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className={inputCls} required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Time</label>
                  <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className={inputCls}>
                    <option value="">Select Time</option>
                    <option>9:00 AM – 11:00 AM</option>
                    <option>11:00 AM – 1:00 PM</option>
                    <option>2:00 PM – 4:00 PM</option>
                    <option>4:00 PM – 6:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message</label>
                <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputCls} placeholder="Describe your symptoms or special requests..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-200">
                Confirm Appointment
              </button>
              <p className="text-center text-gray-400 text-xs">* Required fields. We'll contact you within 30 minutes.</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   EMERGENCY BANNER (UPDATED)
───────────────────────────────────────────── */
const EmergencyBanner = () => (
  <section className="py-16 bg-gradient-to-r from-red-600 to-rose-700 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Ambulance className="w-10 h-10 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-black">24/7 Emergency & Trauma Care at Dharani Hospitals</h2>
      </div>
      <p className="text-lg mb-8 text-red-100 max-w-2xl mx-auto">Immediate medical attention when you need it most. Our emergency team is always ready to respond from our location near Devi Chowk, Rajahmundry.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <Phone className="w-6 h-6" /> Emergency: +91 98765 43210
        </a>
        <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-red-600 transition-all duration-200 hover:-translate-y-1">
          Non-Emergency Consultation
        </button>
      </div>
      <p className="text-sm mt-6 text-red-200">Available 24 hours · Ambulance service within 10 minutes · Near Devi Chowk, Rajahmundry · Best Emergency Hospital in Rajahmundry</p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   CONTACT SECTION WITH GOOGLE MAP (UPDATED)
───────────────────────────────────────────── */
const Contact = () => (
  <section id="contact" className="py-20 lg:py-28 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Get in Touch</span>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-2">Contact Dharani Hospitals, Rajahmundry</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2">Visit the best hospital near Devi Chowk or call us for appointments and emergencies.</p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Reveal className="space-y-4">
          {[
            { icon: MapPin, title: 'Address', content: 'Near Devi Chowk, Lakshmivarapupeta, Rajahmundry – 533103, Andhra Pradesh, India' },
            { icon: Phone, title: 'Phone Numbers', content: 'Appointments: +91 883 123 4567\nEmergency: 102 / +91 98765 43210\nAmbulance: 108' },
            { icon: Clock, title: 'Working Hours', content: 'Emergency: 24/7\nOP: 8:00 AM – 8:00 PM (Mon–Sat)\nSunday: 9:00 AM – 2:00 PM' },
            { icon: Mail, title: 'Email', content: 'General: care@dharanihospital.com\nAppointments: appointments@dharanihospital.com' },
          ].map(({ icon: Icon, title, content }) => (
            <div key={title} className="group flex gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-200 border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{content}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.3204284816857!2d81.7739433!3d17.007945699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a544c995fa65%3A0xac3d96bbd21b5040!2sDharani%20Vascular%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1775554336378!5m2!1sen!2sin"
            className="w-full h-full"
            title="Dharani Hospitals Location - Near Devi Chowk, Rajahmundry - Best Hospital in Rajahmundry"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   FOOTER (UPDATED)
───────────────────────────────────────────── */
const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-lg flex items-center justify-center">
              <img src="/logo1.png" alt="Dharani Hospitals Logo" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-black text-white text-sm tracking-tight">DHARANI HOSPITALS</span>
              <span className="text-[10px] font-semibold text-teal-400 tracking-wider">VASCULAR & MULTISPECIALITY</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">Compassionate care, medical excellence, and patient-first approach since 2005. Located near Devi Chowk, Rajahmundry. Recognized as the best multispeciality and vascular hospital in Rajahmundry.</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200" aria-label="Facebook"><FaFacebook className="w-4 h-4 text-gray-400 hover:text-white" /></a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-500 rounded-xl flex items-center justify-center transition-colors duration-200" aria-label="Twitter"><FaTwitter className="w-4 h-4 text-gray-400 hover:text-white" /></a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors duration-200" aria-label="Instagram"><FaInstagram className="w-4 h-4 text-gray-400 hover:text-white" /></a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors duration-200" aria-label="LinkedIn"><FaLinkedin className="w-4 h-4 text-gray-400 hover:text-white" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Services', 'Doctors', 'Appointment', 'Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-teal-400 transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map(s => (
              <li key={s.id}><a href="#services" className="hover:text-teal-400 transition-colors">{s.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Subscribe for health tips and hospital updates from the best hospital in Rajahmundry.</p>
          <div className="flex rounded-xl overflow-hidden border border-gray-700">
            <input type="email" placeholder="your@email.com" className="flex-1 px-3 py-2.5 bg-gray-800 text-sm text-gray-300 outline-none placeholder-gray-600" />
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 px-4 text-white text-xs font-bold hover:opacity-90 transition-opacity">Subscribe</button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
            <Shield className="w-4 h-4 text-teal-500" />
            <span>NABH & NABL Accredited</span>
          </div>
          <div className="mt-3 text-xs text-gray-600">
            <span>📍 Near Devi Chowk, Rajahmundry</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Dharani Hospitals, Rajahmundry. All rights reserved. &nbsp;·&nbsp; <a href="/privacy-policy" className="hover:text-teal-400">Privacy Policy</a> &nbsp;·&nbsp; <a href="/terms-of-use" className="hover:text-teal-400">Terms of Use</a> &nbsp;·&nbsp; <a href="/sitemap.xml" className="hover:text-teal-400">Sitemap</a>
      </div>
    </div>
  </footer>
);

/* ─────────────────────────────────────────────
   HOMEPAGE COMPONENT
───────────────────────────────────────────── */
const Homepage = () => {
  // Add all schemas to homepage
  useEffect(() => {
    const schemas = [
      generateHospitalSchema(),
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
      generateFAQSchema()
    ];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <SEO
        title="Best Multispeciality & Vascular Hospital in Rajahmundry"
        description="Dharani Hospitals is the best multispeciality and vascular hospital in Rajahmundry offering 24/7 emergency care, advanced vascular surgery, experienced doctors, and affordable treatment near Devi Chowk. Book an appointment today."
        canonical="/"
        keywords="best hospital in Rajahmundry, vascular hospital in Rajahmundry, multispeciality hospital in Rajahmundry, emergency hospital in Rajahmundry, 24 hours hospital in Rajahmundry, vascular surgeon in Rajahmundry, hospital near Devi Chowk, hospital in Lakshmivarapupeta, Dharani Hospitals"
      />
      <Hero />
      <About />
      <Services />
      <VascularCare />
      <Doctors />
      <EmergencyCare />
      <Facilities />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <Blog />
      <Appointment />
      <EmergencyBanner />
      <Contact />
    </>
  );
};

/* ─────────────────────────────────────────────
   APP WITH ROUTING
───────────────────────────────────────────── */
const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Determine which page to show
  const getPage = () => {
    switch (path) {
      case '/best-hospital-in-rajahmundry':
        return <BestHospitalPage />;
      case '/vascular-hospital-in-rajahmundry':
        return <VascularHospitalPage />;
      case '/multispeciality-hospital-in-rajahmundry':
        return <MultispecialityHospitalPage />;
      case '/emergency-hospital-in-rajahmundry':
        return <EmergencyHospitalPage />;
      case '/24-hours-hospital-in-rajahmundry':
        return <TwentyFourHoursHospitalPage />;
      case '/vascular-surgeon-in-rajahmundry':
        return <VascularSurgeonPage />;
      case '/hospital-near-devi-chowk':
        return <HospitalNearDeviChowkPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <HelmetProvider>
      <div className="font-sans antialiased">
        <Navbar />
        <main>
          {getPage()}
        </main>
        <Footer />
        <StickyButtons />
      </div>
    </HelmetProvider>
  );
};

export default App;