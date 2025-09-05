"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  Bot,
  Calendar,
  Sparkles,
  CheckCircle,
  ArrowRight,
  FileText,
} from "lucide-react";

export const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="relative px-6 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 h-3 w-3" />
            AI-Powered Meetings
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            AI-Powered Smart Meetings
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Create your own AI assistant and make your meetings smarter, more
            efficient and productive. With automatic notes, summaries and
            real-time translation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8">
              <Link href="/agents" className="flex items-center">
                Create AI Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Link href="/meetings">View Meetings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transform your meetings with AI technology
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <Card className="relative">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Bot className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="mt-4">AI Assistants</CardTitle>
                <CardDescription>
                  Create custom AI assistants tailored to your needs and use
                  them in your meetings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Custom instructions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Multi-language support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Customizable
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2">
                  <Video className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="mt-4">Video Conferencing</CardTitle>
                <CardDescription>
                  Facilitate remote work with high-quality video conferencing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    HD video quality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Screen sharing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Recording feature
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="mt-4">Automatic Summaries</CardTitle>
                <CardDescription>
                  Automatically summarize and save meeting notes with AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Smart note taking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Automatic summary
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-chart-1" />
                    Search functionality
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Start your AI-powered meetings in 3 steps
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  1. Create AI Assistant
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Create a customized AI assistant based on your meeting type
                  and needs.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10">
                  <Calendar className="h-8 w-8 text-chart-2" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  2. Schedule Meeting
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Set the date, time and participants. Your AI assistant will
                  manage the meeting.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chart-3/10">
                  <Video className="h-8 w-8 text-chart-3" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  3. Start & Record
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Start your meeting. AI will automatically take notes and
                  prepare summaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
