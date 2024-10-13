import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Users, DollarSign, BookOpen, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '2021-02-03', users: 0 },
  { name: '2021-02-04', users: 0 },
  { name: '2021-02-05', users: 0 },
  { name: '2021-02-06', users: 0 },
  { name: '2021-02-07', users: 0 },
  { name: '2021-02-08', users: 0 },
  { name: '2021-02-09', users: 1 },
];

const COLORS = ['#0088FE', '#00C49F'];

export default function Dashboard() {
  const [invites, setInvites] = useState(100);
  const [duration, setDuration] = useState(5);
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculateReturns = () => {
    return totalInvestment * Math.pow((1 + expectedReturn / 100), duration) - totalInvestment;
  };

  const estimatedReturns = calculateReturns();

  const pieData = [
    { name: 'Total Investment', value: totalInvestment },
    { name: 'Estimated Returns', value: estimatedReturns },
  ];

  return (
    <div className="dashboard-container">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Invite</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite to Event</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="invites">Number of Invites</Label>
                <Slider
                  value={[invites]}
                  onValueChange={(value) => setInvites(value[0])}
                  min={1}
                  max={1000}
                  step={1}
                />
                <span>{invites}</span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Event Duration (days)</Label>
                <Slider
                  value={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  min={1}
                  max={30}
                  step={1}
                />
                <span>{duration}</span>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="investment">Total Investment (₹)</Label>
                <Input
                  id="investment"
                  type="number"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(Number(e.target.value))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="return">Expected Return Rate (%)</Label>
                <Input
                  id="return"
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                />
              </div>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p>Total Value: ₹{(totalInvestment + estimatedReturns).toFixed(2)}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 min</div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>New Signups</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
            </LineChart>
          
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}