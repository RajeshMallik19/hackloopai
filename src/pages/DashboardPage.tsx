
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PlusCircle, 
  Users,
  Award,
  Calendar,
  BarChart3,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hackathons");

  const myHackathons = [
    {
      id: '1',
      name: 'AI Innovation Challenge',
      startDate: '2023-11-01',
      endDate: '2023-11-15',
      role: 'Participant',
      teamName: 'Neural Ninjas',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Blockchain Builders Hackathon',
      startDate: '2023-10-15',
      endDate: '2023-10-22',
      role: 'Team Leader',
      teamName: 'Chain Gang',
      status: 'Completed'
    },
    {
      id: '3',
      name: 'Sustainable Tech Jam',
      startDate: '2023-12-01',
      endDate: '2023-12-10',
      role: 'Participant',
      teamName: 'Green Coders',
      status: 'Upcoming'
    },
  ];

  const recommendedHackathons = [
    {
      id: '4',
      name: 'Web3 Innovation Challenge',
      startDate: '2023-12-15',
      endDate: '2023-12-22',
      organizer: 'Ethereum Foundation',
      participants: 1200,
      prize: '$50,000',
      match: '93% Match'
    },
    {
      id: '5',
      name: 'Global Health Hackathon',
      startDate: '2024-01-10',
      endDate: '2024-01-17',
      organizer: 'WHO Tech Division',
      participants: 800,
      prize: '$30,000',
      match: '87% Match'
    },
    {
      id: '6',
      name: 'Climate Change Solutions',
      startDate: '2024-02-01',
      endDate: '2024-02-08',
      organizer: 'Green Tech Alliance',
      participants: 650,
      prize: '$25,000',
      match: '82% Match'
    },
  ];

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, {currentUser?.displayName || 'Hacker'}</h1>
              <p className="text-muted-foreground">Your hackathon dashboard</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                className="bg-hackloop-yellow text-hackloop-black hover:bg-opacity-80 flex items-center gap-2"
                onClick={() => navigate('/create-hackathon')}
              >
                <PlusCircle size={18} />
                Create Hackathon
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">My Projects</CardTitle>
                <CardDescription>Active and past projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5</div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="text-hackloop-yellow p-0 h-auto hover:no-underline" onClick={() => navigate('/projects')}>
                  View all projects
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Team Matches</CardTitle>
                <CardDescription>AI-recommended collaborators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="text-hackloop-yellow p-0 h-auto hover:no-underline" onClick={() => navigate('/matches')}>
                  View matches
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">NFT Certificates</CardTitle>
                <CardDescription>Secured project certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="text-hackloop-yellow p-0 h-auto hover:no-underline" onClick={() => navigate('/certificates')}>
                  View certificates
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Tabs defaultValue="hackathons" className="mb-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="hackathons" className="text-base">My Hackathons</TabsTrigger>
              <TabsTrigger value="recommended" className="text-base">Recommended</TabsTrigger>
              <TabsTrigger value="analytics" className="text-base">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hackathons">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {myHackathons.map((hackathon) => (
                  <Card key={hackathon.id} className="overflow-hidden">
                    <div className="h-2 bg-hackloop-yellow"></div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{hackathon.name}</CardTitle>
                        <div className={`px-2 py-1 text-xs rounded-full ${
                          hackathon.status === 'Active' ? 'bg-green-100 text-green-800' : 
                          hackathon.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {hackathon.status}
                        </div>
                      </div>
                      <CardDescription>
                        {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Users size={16} className="mr-2 text-muted-foreground" />
                          <span>Team: {hackathon.teamName}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2 text-muted-foreground" />
                          <span>Role: {hackathon.role}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={() => navigate(`/hackathon/${hackathon.id}`)}>
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedHackathons.map((hackathon) => (
                  <Card key={hackathon.id} className="overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{hackathon.name}</CardTitle>
                        <div className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          {hackathon.match}
                        </div>
                      </div>
                      <CardDescription>
                        {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Users size={16} className="mr-2 text-muted-foreground" />
                          <span>{hackathon.participants} Participants</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2 text-muted-foreground" />
                          <span>Prize: {hackathon.prize}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-muted-foreground" />
                          <span>{hackathon.organizer}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        variant="outline" 
                        className="flex-1 mr-2"
                        onClick={() => navigate(`/hackathon/${hackathon.id}`)}
                      >
                        Learn More
                      </Button>
                      <Button 
                        className="flex-1 bg-hackloop-yellow text-hackloop-black hover:bg-opacity-80"
                        onClick={() => navigate(`/hackathon/${hackathon.id}/apply`)}
                      >
                        Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Hackathon Stats</CardTitle>
                    <CardDescription>Performance overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                        <CheckCircle size={40} className="text-green-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Completed Hackathons</p>
                          <h3 className="text-2xl font-bold">4</h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                        <Award size={40} className="text-hackloop-yellow" />
                        <div>
                          <p className="text-sm text-muted-foreground">Winning Projects</p>
                          <h3 className="text-2xl font-bold">2</h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                        <Clock size={40} className="text-blue-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Hours Contributed</p>
                          <h3 className="text-2xl font-bold">128</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 h-64 flex items-center justify-center border rounded-lg">
                      <div className="text-center">
                        <BarChart3 size={48} className="mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Detailed analytics charts will appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
