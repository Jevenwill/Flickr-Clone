class RootController < ApplicationController
  before_filter :authenticate_user!
  def root
    @photos = Photo.all.reverse
  end

end
