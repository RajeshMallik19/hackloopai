
import React from 'react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

const NFTSecurityPage = () => {
  const { currentUser } = useAuth();
  
  const handleCreateNFT = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to a blockchain service in a real implementation
    console.log('Creating project NFT...');
  };
  
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Project NFT Security</h1>
          <p className="text-muted-foreground mb-8">
            Protect your hackathon projects with blockchain-based NFTs that verify ownership and intellectual property
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Create Project NFT Certificate</CardTitle>
                  <CardDescription>
                    This will generate an NFT certificate for your project on the blockchain
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleCreateNFT}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name</Label>
                      <Input id="projectName" placeholder="Enter your project name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectDesc">Project Description</Label>
                      <Textarea 
                        id="projectDesc" 
                        placeholder="Describe your project in detail" 
                        rows={4} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="teamMembers">Team Members (separate by commas)</Label>
                      <Input 
                        id="teamMembers" 
                        placeholder="Enter team member emails" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectFile">Upload Project Files (optional)</Label>
                      <Input 
                        id="projectFile" 
                        type="file"
                        multiple
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Only the hash of your files will be stored on the blockchain for verification purposes
                      </p>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">How It Works</h4>
                      <p className="text-sm text-yellow-700">
                        We generate a secure hash of your project details and files, then mint an NFT
                        on the blockchain with this hash. This provides timestamped proof of your work
                        without revealing the actual content publicly.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="bg-hackloop-yellow text-hackloop-black hover:bg-opacity-80"
                    >
                      Create NFT Certificate
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your NFT Certificates</CardTitle>
                  <CardDescription>
                    Manage your existing project certificates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">AI Image Generator</h4>
                          <p className="text-sm text-muted-foreground">Created: Oct 10, 2023</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          Verified
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Blockchain Voting App</h4>
                          <p className="text-sm text-muted-foreground">Created: Sep 5, 2023</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          Verified
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Smart Home IoT Platform</h4>
                          <p className="text-sm text-muted-foreground">Created: Aug 22, 2023</p>
                        </div>
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Certificates
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Verify Certificate</CardTitle>
                  <CardDescription>
                    Check authenticity of any HackLoop NFT
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="certId">Certificate ID or Hash</Label>
                    <Input 
                      id="certId" 
                      placeholder="Enter NFT certificate ID" 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Verify Certificate
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
};

export default NFTSecurityPage;
