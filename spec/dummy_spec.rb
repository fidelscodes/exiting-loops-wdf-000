require_relative "../lib/dummy.rb"

describe "#dummy" do
  it "prints out 'dummy test!'" do
    dummy = Dummy.new
    expect{dummy.say}.to output("dummy test!\n").to_stdout

  end
end
